define({ "api": [
  {
    "type": "get",
    "url": "/encryption/generate-key",
    "title": "Generate Encryption Key",
    "name": "EncryptionGenerateKey",
    "group": "Encryption",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "encryptionKey",
            "description": "<p>Generated hexadecimal key (64 characters)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"encryptionKey\" : \"bPeShVmYq3s6v9y$B&E)H@McQfTjWnZr\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/encryption.js",
    "groupTitle": "Encryption"
  },
  {
    "type": "post",
    "url": "/profile/create",
    "title": "Create Profile",
    "name": "CreateProfile",
    "group": "Profile",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Full name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateOfBirth",
            "description": "<p>The date of birth of the user in YYYY-MM-DD format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"fullName\" : \"John Doe\",\n    \"dateOfBirth\": \"1983-10-11\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/profile.js",
    "groupTitle": "Profile"
  }
] });
