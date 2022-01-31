using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Avro;

namespace KafkaFlow.Sample.SchemaRegistry.Middlewares
{
    internal class ProducerMetricsMiddleware : IMessageMiddleware
    {
        public Task Invoke(IMessageContext context, MiddlewareDelegate next)
        {
            var messageType = context.Message.Value.GetType().ToString();
            var isAvro = false;

            var prop = context.Message.Value.GetType().GetProperty("Schema", BindingFlags.Instance | BindingFlags.Public);
            if (prop != null)
            {
                var schema = prop.GetValue(context.Message.Value, null) as Schema;
                if (schema != null)
                {
                    messageType = schema.Fullname;
                    isAvro = true;
                }
            }

            if(isAvro)
            {
                Console.WriteLine($"Producing Avro message with schema: {messageType}");
            }
            else
            {
                Console.WriteLine($"Producing object with type: {messageType}");
            }           

            return next.Invoke(context);
        }
    }
}
