define({ "api": [
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
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"fullName\" : \"John Doe\"\n}",
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
