namespace KafkaFlow.Sample.SchemaRegistry
{
    using System;
    using System.Threading.Tasks;
    using Avro.Handlers;
    using Confluent.SchemaRegistry;
    using Confluent.SchemaRegistry.Serdes;
    using global::SchemaRegistry;
    using Handlers;
    using KafkaFlow.Sample.SchemaRegistry.MessageTypes;
    using KafkaFlow.Sample.SchemaRegistry.Middlewares;
    using KafkaFlow.Serializer;
    using Microsoft.Extensions.DependencyInjection;
    using Producers;
    using TypedHandler;

    internal static class Program
    {
        private static async Task Main()
        {
            var services = new ServiceCollection();

            const string avroProducerName = "avro-producer";
            const string jsonProducerName = "json-producer";
            const string protobufProducerName = "protobuf-producer";
            const string objProducerName = "obj-producer";
            const string primitiveProducerName = "primitive-producer";
            const string avroTopic = "avro-topic";
            const string jsonTopic = "json-topic";
            const string protobufTopic = "protobuf-topic";
            const string objTopic = "obj-topic";
            const string primitiveTopic = "primitive-topic";

            services.AddKafka(
                kafka => kafka
                    .UseConsoleLog()
                    .AddCluster(
                        cluster => cluster
                            .WithBrokers(new[] {"localhost:9092"})
                            .WithSchemaRegistry(config => config.Url = "localhost:8081")
                            .AddProducer(
                                avroProducerName,
                                producer => producer
                                    .DefaultTopic(avroTopic)
                                    .AddMiddlewares(
                                        middlewares => middlewares
                                            .AddAtBeginning<ProducerMetricsMiddleware>()
                                            .AddSchemaRegistryAvroSerializer(
                                                new AvroSerializerConfig
                                                {
                                                    SubjectNameStrategy = SubjectNameStrategy.TopicRecord
                                                }))
                            )
                            .AddProducer(
                                jsonProducerName,
                                producer => producer
                                    .DefaultTopic(jsonTopic)
                                    .AddMiddlewares(
                                        middlewares => middlewares
                                            .AddAtBeginning<ProducerMetricsMiddleware>()
                                            .AddSchemaRegistryJsonSerializer<JsonLogMessage>(
                                                new JsonSerializerConfig
                                                {
                                                    SubjectNameStrategy = SubjectNameStrategy.TopicRecord
                                                }))
                            )
                            .AddProducer(
                                protobufProducerName,
                                producer => producer
                                    .DefaultTopic(protobufTopic)
                                    .AddMiddlewares(
                                        middlewares => middlewares
                                            .AddAtBeginning<ProducerMetricsMiddleware>()
                                            .AddSchemaRegistryProtobufSerializer(
                                                new ProtobufSerializerConfig
                                                {
                                                    SubjectNameStrategy = SubjectNameStrategy.TopicRecord
                                                })
                                    )
                            )
                            .AddProducer(
                                objProducerName,
                                producer => producer
                                    .DefaultTopic(objTopic)
                                    .AddMiddlewares(
                                        middlewares => middlewares
                                            .AddSerializer<NewtonsoftJsonSerializer>()
                                            .AddAtBeginning<ProducerMetricsMiddleware>()
                                    )
                            )
                            .AddConsumer(
                                consumer => consumer
                                    .Topic(avroTopic)
                                    .WithGroupId("avro-group-id")
                                    .WithBufferSize(100)
                                    .WithWorkersCount(20)
                                    .WithAutoOffsetReset(AutoOffsetReset.Latest)
                                    .AddMiddlewares(
                                        middlewares => middlewares                                            
                                            .AddSchemaRegistryAvroSerializer()
                                            .AddTypedHandlers(
                                                handlers => handlers
                                                    .AddHandler<AvroMessageHandler>()
                                                    .AddHandler<AvroMessageHandler2>())
                                            .Add<ConsumerMetricsMiddleware>()
                                    )
                            ) 
                        .AddConsumer(
                            consumer => consumer
                                .Topic(jsonTopic)
                                .WithGroupId("json-group-id")
                                .WithBufferSize(100)
                                .WithWorkersCount(20)
                                .WithAutoOffsetReset(AutoOffsetReset.Latest)
                                .AddMiddlewares(
                                    middlewares => middlewares
                                        .AddSchemaRegistryJsonSerializer<JsonLogMessage>()
                                        .AddTypedHandlers(handlers => handlers.AddHandler<JsonMessageHandler>())
                                        .Add<ConsumerMetricsMiddleware>()
                                )
                        )
                        .AddConsumer(
                            consumer => consumer
                                .Topic(protobufTopic)
                                .WithGroupId("protobuf-group-id")
                                .WithBufferSize(100)
                                .WithWorkersCount(20)
                                .WithAutoOffsetReset(AutoOffsetReset.Latest)
                                .AddMiddlewares(
                                    middlewares => middlewares                                        
                                        .AddSchemaRegistryProtobufSerializer()
                                        .AddTypedHandlers(handlers => handlers.AddHandler<ProtobufMessageHandler>())
                                        .Add<ConsumerMetricsMiddleware>()
                                )
                        )
                        .AddConsumer(
                            consumer => consumer
                                .Topic(objTopic)
                                .WithGroupId("obj-group-id")
                                .WithBufferSize(100)
                                .WithWorkersCount(20)
                                .WithAutoOffsetReset(AutoOffsetReset.Latest)
                                .AddMiddlewares(
                                    middlewares => middlewares
                                        .AddSerializer<NewtonsoftJsonSerializer>()
                                        .AddTypedHandlers(handlers => handlers.AddHandler<UserMessageHandler>())
                                        .Add<ConsumerMetricsMiddleware>()
                                )
                        )
                    )
            );

            var provider = services.BuildServiceProvider();
            var bus = provider.CreateKafkaBus();
            await bus.StartAsync();

            var producers = provider.GetRequiredService<IProducerAccessor>();

            while (true)
            {
                Console.WriteLine("Number of messages to produce or exit:");
                var input = Console.ReadLine().ToLower();

                switch (input)
                {
                    case var _ when int.TryParse(input, out var count):
                        for (var i = 0; i < count; i++)
                        {
                            await Task.WhenAll(
                                producers[avroProducerName].ProduceAsync(
                                    Guid.NewGuid().ToString(),
                                    new AvroLogMessage {Severity = LogLevel.Info}),
                                producers[avroProducerName].ProduceAsync(
                                    Guid.NewGuid().ToString(),
                                    new AvroLogMessage2 {Message = Guid.NewGuid().ToString()}),
                                producers[jsonProducerName].ProduceAsync(
                                    Guid.NewGuid().ToString(),
                                    new JsonLogMessage {Message = Guid.NewGuid().ToString()}),
                                producers[protobufProducerName].ProduceAsync(
                                    Guid.NewGuid().ToString(),
                                    new ProtobufLogMessage {Message = Guid.NewGuid().ToString()}),
                                producers[objProducerName].ProduceAsync(
                                    Guid.NewGuid().ToString(),
                                    new User { Id = Guid.NewGuid().ToString() })
                            );
                        }

                        break;

                    case "exit":
                        await bus.StopAsync();
                        return;
                }
            }
        }
    }
}
