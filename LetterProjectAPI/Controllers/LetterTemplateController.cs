using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using Utilities;

namespace LetterProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LetterTemplateController : ControllerBase
    {
        private readonly IConfiguration _config;

        public LetterTemplateController(IConfiguration config) 
        {
            _config = config;
        }

        public IMongoCollection<BsonDocument> Connection
        {
            get
            {
                MongoClient client = new MongoClient(Config.GetMongoConnectionString());
                IMongoDatabase database = client.GetDatabase(Config.GetDatabase());

                return database.GetCollection<BsonDocument>(Config.GetCollectionName("Templates"));
            }
        }

        // GET api/lettertemplates?q=name
        [HttpGet("{name:length(24)}", Name = "GetTemplate")]
        public BsonDocument Get(string q)
        {
            string query = "{ 'name': '" + q + "'}";

            BsonDocument filter = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>(query);
            ProjectionDefinition<BsonDocument> projectionDefinition = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>("{}");
            return Connection.Find(filter).Project(projectionDefinition).FirstOrDefault();

        }


        [HttpPost]
        public ActionResult<BsonDocument> Create(BsonDocument template)
        {

            BsonDocument filter = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>(template);
            Connection.InsertOne(filter);

            return CreatedAtRoute("GetTemplate", new { name = template["name"].ToString() }, template);
        }

        [HttpPut("{id:length(24)}")]
        public ActionResult Update(string id, BsonDocument templateIn)
        {
            var template = Get(id);

            if (template == null)
            {
                return NotFound();
            }

            BsonDocument filter = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>(template);
            Connection.ReplaceOne(filter, templateIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public ActionResult Delete(string id)
        {
            var template = Get(id);

            if (template == null)
            {
                return NotFound();
            }

            BsonDocument filter = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>(template);
            Connection.DeleteOne(filter);

            return NoContent();
        }

    }
}
