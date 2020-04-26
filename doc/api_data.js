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
    "type": "get",
    "url": "/grant/get",
    "title": "Get Grant",
    "name": "GetGrant",
    "group": "Grant",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessGrantId",
            "description": "<p>ID of the grant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"accessGrantId\" : \"5cc17dd9-2d39-4fb7-befa-fae4febd7f4f\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"fullName\" : \"John Doe\",\n    \"email\" : \"johndoe@example.com\",\n    \"dateOfBirth\" : \"01/01/1989\",\n    \"phoneMobile\" : \"+6592847283\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/grant.js",
    "groupTitle": "Grant"
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
            "description": "<p>The date of birth of the user in DD/MM/YYYY format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneMobile",
            "description": "<p>Mobile phone number of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "encryptionKey",
            "description": "<p>64 hexadecimal encoded string</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"fullName\" : \"John Doe\",\n    \"dateOfBirth\" : \"01/01/1989\",\n    \"email\" : \"johndoe@example.com\",\n    \"phoneMobile\": \"+6592847283\",\n    \"encryptionKey\": \"bPeShVmYq3s6v9y$B&E)H@McQfTjWnZr\",\n}",
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
  },
  {
    "type": "post",
    "url": "/profile/decrypt",
    "title": "Decrypt Profile",
    "name": "DecryptProfile",
    "group": "Profile",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "encryptionKey",
            "description": "<p>The encryption key that was used to encrypt the data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"johndoe@example.com\",\n    \"encryptionKey\": \"bPeShVmYq3s6v9y$B&E)H@McQfTjWnZr\"\n}",
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
            "field": "fullName",
            "description": "<p>Full name of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "dateOfBirth",
            "description": "<p>The date of birth of the user in DD/MM/YYYY format</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "phoneMobile",
            "description": "<p>Mobile phone number of the user</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "encryptionKey",
            "description": "<p>64 hexadecimal encoded string</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"fullName\" : \"John Doe\",\n    \"email\" : \"johndoe@example.com\",\n    \"dateOfBirth\" : \"01/01/1989\",\n    \"phoneMobile\" : \"+6592847283\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/profile/grant-access",
    "title": "Grant Access",
    "name": "GrantAccessProfile",
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
            "description": "<p>The date of birth of the user in DD/MM/YYYY format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneMobile",
            "description": "<p>Mobile phone number of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expiryDate",
            "description": "<p>Date of expiry of the granted access</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deleteAfterAccessed",
            "description": "<p>Delete once the profile has been accessed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"fullName\" : \"John Doe\",\n    \"email\" : \"johndoe@example.com\",\n    \"dateOfBirth\" : \"01/01/1989\",\n    \"phoneMobile\" : \"+6592847283\",\n}",
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
            "field": "accessGrantId",
            "description": "<p>The ID of the granted access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"accessGrantId\": \"5cc17dd9-2d39-4fb7-befa-fae4febd7f4f\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/profile.js",
    "groupTitle": "Profile"
  }
] });
