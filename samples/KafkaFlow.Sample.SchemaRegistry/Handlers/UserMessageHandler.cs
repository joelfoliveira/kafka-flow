namespace KafkaFlow.Sample.SchemaRegistry.Handlers
{
    using System;
    using System.Reflection;
    using System.Threading.Tasks;
    using global::Avro;
    using global::SchemaRegistry;
    using KafkaFlow.Sample.SchemaRegistry.MessageTypes;
    using TypedHandler;

    public class UserMessageHandler : IMessageHandler<User>
    {
        public Task Handle(IMessageContext context, User message)
        {
            //Console.WriteLine(
            //    "Partition: {0} | Offset: {1} | Message: {2} | Obj",
            //    context.ConsumerContext.Partition,
            //    context.ConsumerContext.Offset);

            return Task.CompletedTask;
        }
    }
}
