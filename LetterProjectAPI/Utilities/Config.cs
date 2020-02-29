using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Extensions.Configuration;

namespace Utilities
{
    public static class Config
    {
        public static List<string> GetKeys(string fileName)
        {
            List<string> keys = new List<string>();

            IConfigurationBuilder builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(fileName);
            IConfigurationRoot configuration = builder.Build();
            IEnumerable<IConfigurationSection> configSections = configuration.GetChildren().ToList();

            foreach (IConfigurationSection section in configSections)
            {
                keys.Add(section.Key);
            }

            return keys;
        }

        public static string GetString(string fileName, string sectionPath)
        {
            IConfigurationBuilder builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(fileName);
            IConfigurationRoot configuration = builder.Build();
            IConfigurationSection configSection = configuration.GetSection(sectionPath);

            return configSection.Value;
        }

        public static List<string> GetListOfStrings(string fileName, string sectionPath)
        {
            List<string> list = new List<string>();

            IConfigurationBuilder builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(fileName);
            IConfigurationRoot configuration = builder.Build();
            IConfigurationSection configSection = configuration.GetSection(sectionPath);

            foreach (IConfigurationSection section in configSection.GetChildren())
            {
                list.Add(section.Value);
            }

            return list;
        }

        public static IConfigurationSection GetObjectFromArray(string fileName, string arrayPath, string objectName)
        {
            IConfigurationBuilder builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(fileName);
            IConfigurationRoot configuration = builder.Build();
            IConfigurationSection configSection = configuration.GetSection(arrayPath);
            IConfigurationSection objectValue = configSection.GetChildren().Where(c => c["name"] == objectName).FirstOrDefault();

            return objectValue;
        }

        public static List<IConfigurationSection> GetArrayOfObjects(string fileName, string arrayPath)
        {
            List<IConfigurationSection> list = new List<IConfigurationSection>();

            IConfigurationBuilder builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(fileName);
            IConfigurationRoot configuration = builder.Build();
            IConfigurationSection configSection = configuration.GetSection(arrayPath);

            foreach (IConfigurationSection section in configSection.GetChildren())
            {
                list.Add(section);
            }

            return list;
        }

        public static string GetStringFromObject(string fileName, string objectPath, string name)
        {
            IConfigurationBuilder builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(fileName);
            IConfigurationRoot configuration = builder.Build();
            IConfigurationSection configSection = configuration.GetSection(objectPath);

            return configSection[name];
        }

        public static string GetMongoConnectionString()
        {
            return GetString("config.json", "MongoConnectionString");
        }

        public static string GetDatabase()
        {
            bool isOpenSSL = GetIsOpenSSL();

            if (isOpenSSL)
            {
                string databaseName = GetString("config.json", "DatabaseName");

                return databaseName;
            }
            else
            {
                string mongoConnection = GetMongoConnectionString();
                string[] splits = mongoConnection.Split('/');

                return splits[splits.Length - 1];
            }
        }

        public static string GetCollectionName(string collection)
        {
            return GetStringFromObject("config.json", "DatabaseCollections", collection);

        }

        public static bool GetIsOpenSSL()
        {
            string value = GetString("config.json", "IsOpenSSL");

            if (string.IsNullOrEmpty(value))
            {
                return false;
            }

            if (value.ToLower() == "false")
            {
                return false;
            }
            else if (value.ToLower() == "true")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}