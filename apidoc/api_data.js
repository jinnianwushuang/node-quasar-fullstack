define({ "api": [
  {
    "type": "delete",
    "url": "/api/authors",
    "title": "删除所有作者",
    "group": "作者模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authors/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_authors",
    "name": "DeleteApiAuthors"
  },
  {
    "type": "delete",
    "url": "/api/authors/:id",
    "title": "删除单个作者",
    "group": "作者模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authors/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_authors",
    "name": "DeleteApiAuthorsId"
  },
  {
    "type": "get",
    "url": "/api/authors",
    "title": "查询所有作者",
    "group": "作者模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authors/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_authors",
    "name": "GetApiAuthors"
  },
  {
    "type": "get",
    "url": "/api/authors/fieldDescription",
    "title": "返回作者表字段信息说明",
    "group": "作者模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authors/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_authors",
    "name": "GetApiAuthorsFielddescription"
  },
  {
    "type": "get",
    "url": "/api/authors/findAllBySex",
    "title": "通过性别查询",
    "group": "作者模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authors/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_authors",
    "name": "GetApiAuthorsFindallbysex"
  },
  {
    "type": "get",
    "url": "/api/authors/:id",
    "title": "查询单个作者",
    "group": "作者模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authors/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_authors",
    "name": "GetApiAuthorsId"
  },
  {
    "type": "post",
    "url": "/api/authors",
    "title": "创建一个作者",
    "group": "作者模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authors/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_authors",
    "name": "PostApiAuthors"
  },
  {
    "type": "put",
    "url": "/api/authors/:id",
    "title": "修改单个作者",
    "group": "作者模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authors/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_authors",
    "name": "PutApiAuthorsId"
  },
  {
    "type": "delete",
    "url": "/api/tutorials",
    "title": "删除所有教程",
    "group": "教程模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorials/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_authors",
    "name": "DeleteApiTutorials"
  },
  {
    "type": "delete",
    "url": "/api/tutorials/:id",
    "title": "删除单个教程",
    "group": "教程模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorials/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_authors",
    "name": "DeleteApiTutorialsId"
  },
  {
    "type": "get",
    "url": "/api/tutorials",
    "title": "查询所有教程",
    "group": "教程模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorials/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_authors",
    "name": "GetApiTutorials"
  },
  {
    "type": "get",
    "url": "/api/tutorials/fieldDescription",
    "title": "返回教程表字段信息说明",
    "group": "教程模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorials/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_authors",
    "name": "GetApiTutorialsFielddescription"
  },
  {
    "type": "get",
    "url": "/api/tutorials/:id",
    "title": "查询单个教程",
    "group": "教程模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorials/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_authors",
    "name": "GetApiTutorialsId"
  },
  {
    "type": "get",
    "url": "/api/tutorials/published",
    "title": "查询所有已发布教程",
    "group": "教程模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorials/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_authors",
    "name": "GetApiTutorialsPublished"
  },
  {
    "type": "post",
    "url": "/api/tutorials",
    "title": "创建一个教程",
    "group": "教程模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorials/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_authors",
    "name": "PostApiTutorials"
  },
  {
    "type": "put",
    "url": "/api/tutorials/:id",
    "title": "修改单个教程",
    "group": "教程模块--_authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorials/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_authors",
    "name": "PutApiTutorialsId"
  }
] });
