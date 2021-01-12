define({ "api": [
  {
    "type": "delete",
    "url": "/api/author",
    "title": "删除所有作者",
    "group": "作者模块--_author",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/author/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_author",
    "name": "DeleteApiAuthor"
  },
  {
    "type": "delete",
    "url": "/api/author/:id",
    "title": "删除单个作者",
    "group": "作者模块--_author",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/author/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_author",
    "name": "DeleteApiAuthorId"
  },
  {
    "type": "get",
    "url": "/api/author",
    "title": "查询所有作者",
    "group": "作者模块--_author",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/author/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_author",
    "name": "GetApiAuthor"
  },
  {
    "type": "get",
    "url": "/api/author/fastMock",
    "title": "一键模拟数据",
    "group": "作者模块--_author",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/author/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_author",
    "name": "GetApiAuthorFastmock"
  },
  {
    "type": "get",
    "url": "/api/author/fieldDescription",
    "title": "返回作者表字段信息说明",
    "group": "作者模块--_author",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/author/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_author",
    "name": "GetApiAuthorFielddescription"
  },
  {
    "type": "get",
    "url": "/api/author/findAllBySex",
    "title": "通过性别查询",
    "group": "作者模块--_author",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/author/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_author",
    "name": "GetApiAuthorFindallbysex"
  },
  {
    "type": "get",
    "url": "/api/author/:id",
    "title": "查询单个作者",
    "group": "作者模块--_author",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/author/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_author",
    "name": "GetApiAuthorId"
  },
  {
    "type": "post",
    "url": "/api/author",
    "title": "创建一个作者",
    "group": "作者模块--_author",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/author/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_author",
    "name": "PostApiAuthor"
  },
  {
    "type": "put",
    "url": "/api/author/:id",
    "title": "修改单个作者",
    "group": "作者模块--_author",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/author/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/author.routes.js",
    "groupTitle": "作者模块--_author",
    "name": "PutApiAuthorId"
  },
  {
    "type": "delete",
    "url": "/api/tutorial",
    "title": "删除所有教程",
    "group": "教程模块--_tutorial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorial/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_tutorial",
    "name": "DeleteApiTutorial"
  },
  {
    "type": "delete",
    "url": "/api/tutorial/:id",
    "title": "删除单个教程",
    "group": "教程模块--_tutorial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorial/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_tutorial",
    "name": "DeleteApiTutorialId"
  },
  {
    "type": "get",
    "url": "/api/tutorial",
    "title": "查询所有教程",
    "group": "教程模块--_tutorial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorial/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_tutorial",
    "name": "GetApiTutorial"
  },
  {
    "type": "get",
    "url": "/api/tutorial/fastMock",
    "title": "快速模拟数据",
    "group": "教程模块--_tutorial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorial/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_tutorial",
    "name": "GetApiTutorialFastmock"
  },
  {
    "type": "get",
    "url": "/api/tutorial/fieldDescription",
    "title": "返回教程表字段信息说明",
    "group": "教程模块--_tutorial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorial/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_tutorial",
    "name": "GetApiTutorialFielddescription"
  },
  {
    "type": "get",
    "url": "/api/tutorial/:id",
    "title": "查询单个教程",
    "group": "教程模块--_tutorial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorial/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_tutorial",
    "name": "GetApiTutorialId"
  },
  {
    "type": "get",
    "url": "/api/tutorial/published",
    "title": "查询所有已发布教程",
    "group": "教程模块--_tutorial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorial/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_tutorial",
    "name": "GetApiTutorialPublished"
  },
  {
    "type": "post",
    "url": "/api/tutorial",
    "title": "创建一个教程",
    "group": "教程模块--_tutorial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorial/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_tutorial",
    "name": "PostApiTutorial"
  },
  {
    "type": "put",
    "url": "/api/tutorial/:id",
    "title": "修改单个教程",
    "group": "教程模块--_tutorial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/tutorial/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/turorial.routes.js",
    "groupTitle": "教程模块--_tutorial",
    "name": "PutApiTutorialId"
  },
  {
    "type": "delete",
    "url": "/api/artical",
    "title": "删除所有文章",
    "group": "文章模块--_artical",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/artical/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/artical.routes.js",
    "groupTitle": "文章模块--_artical",
    "name": "DeleteApiArtical"
  },
  {
    "type": "delete",
    "url": "/api/artical/:id",
    "title": "删除单个文章",
    "group": "文章模块--_artical",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/artical/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/artical.routes.js",
    "groupTitle": "文章模块--_artical",
    "name": "DeleteApiArticalId"
  },
  {
    "type": "get",
    "url": "/api/artical",
    "title": "查询所有文章",
    "group": "文章模块--_artical",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/artical/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/artical.routes.js",
    "groupTitle": "文章模块--_artical",
    "name": "GetApiArtical"
  },
  {
    "type": "get",
    "url": "/api/artical/fastMock",
    "title": "一键模拟数据",
    "group": "文章模块--_artical",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/artical/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/artical.routes.js",
    "groupTitle": "文章模块--_artical",
    "name": "GetApiArticalFastmock"
  },
  {
    "type": "get",
    "url": "/api/artical/fieldDescription",
    "title": "返回文章表字段信息说明",
    "group": "文章模块--_artical",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/artical/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/artical.routes.js",
    "groupTitle": "文章模块--_artical",
    "name": "GetApiArticalFielddescription"
  },
  {
    "type": "get",
    "url": "/api/artical/findAllBySex",
    "title": "通过性别查询",
    "group": "文章模块--_artical",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/artical/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/artical.routes.js",
    "groupTitle": "文章模块--_artical",
    "name": "GetApiArticalFindallbysex"
  },
  {
    "type": "get",
    "url": "/api/artical/:id",
    "title": "查询单个文章",
    "group": "文章模块--_artical",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/artical/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/artical.routes.js",
    "groupTitle": "文章模块--_artical",
    "name": "GetApiArticalId"
  },
  {
    "type": "post",
    "url": "/api/artical",
    "title": "创建一个文章",
    "group": "文章模块--_artical",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/artical/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/artical.routes.js",
    "groupTitle": "文章模块--_artical",
    "name": "PostApiArtical"
  },
  {
    "type": "put",
    "url": "/api/artical/:id",
    "title": "修改单个文章",
    "group": "文章模块--_artical",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/artical/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/artical.routes.js",
    "groupTitle": "文章模块--_artical",
    "name": "PutApiArticalId"
  },
  {
    "type": "delete",
    "url": "/api/authentication",
    "title": "删除所有权限",
    "group": "权限模块--_authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authentication/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/authentication.routes.js",
    "groupTitle": "权限模块--_authentication",
    "name": "DeleteApiAuthentication"
  },
  {
    "type": "delete",
    "url": "/api/authentication/:id",
    "title": "删除单个权限",
    "group": "权限模块--_authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authentication/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/authentication.routes.js",
    "groupTitle": "权限模块--_authentication",
    "name": "DeleteApiAuthenticationId"
  },
  {
    "type": "get",
    "url": "/api/authentication",
    "title": "查询所有权限",
    "group": "权限模块--_authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authentication/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/authentication.routes.js",
    "groupTitle": "权限模块--_authentication",
    "name": "GetApiAuthentication"
  },
  {
    "type": "get",
    "url": "/api/authentication/fieldDescription",
    "title": "返回权限表字段信息说明",
    "group": "权限模块--_authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authentication/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/authentication.routes.js",
    "groupTitle": "权限模块--_authentication",
    "name": "GetApiAuthenticationFielddescription"
  },
  {
    "type": "get",
    "url": "/api/authentication/:id",
    "title": "查询单个权限",
    "group": "权限模块--_authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authentication/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/authentication.routes.js",
    "groupTitle": "权限模块--_authentication",
    "name": "GetApiAuthenticationId"
  },
  {
    "type": "get",
    "url": "/api/authentication/published",
    "title": "查询所有已发布权限",
    "group": "权限模块--_authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authentication/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/authentication.routes.js",
    "groupTitle": "权限模块--_authentication",
    "name": "GetApiAuthenticationPublished"
  },
  {
    "type": "post",
    "url": "/api/authentication",
    "title": "创建一个权限",
    "group": "权限模块--_authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authentication/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/authentication.routes.js",
    "groupTitle": "权限模块--_authentication",
    "name": "PostApiAuthentication"
  },
  {
    "type": "put",
    "url": "/api/authentication/:id",
    "title": "修改单个权限",
    "group": "权限模块--_authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/authentication/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/authentication.routes.js",
    "groupTitle": "权限模块--_authentication",
    "name": "PutApiAuthenticationId"
  },
  {
    "type": "post",
    "url": "/api/file",
    "title": "创建一个用户",
    "group": "用户模块--_file",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/file/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/file.routes.js",
    "groupTitle": "用户模块--_file",
    "name": "PostApiFile"
  },
  {
    "type": "delete",
    "url": "/api/user",
    "title": "删除所有用户",
    "group": "用户模块--_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/user/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/user.routes.js",
    "groupTitle": "用户模块--_user",
    "name": "DeleteApiUser"
  },
  {
    "type": "delete",
    "url": "/api/user/:id",
    "title": "删除单个用户",
    "group": "用户模块--_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/user/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/user.routes.js",
    "groupTitle": "用户模块--_user",
    "name": "DeleteApiUserId"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "查询所有用户",
    "group": "用户模块--_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/user/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/user.routes.js",
    "groupTitle": "用户模块--_user",
    "name": "GetApiUser"
  },
  {
    "type": "get",
    "url": "/api/user/fieldDescription",
    "title": "返回用户表字段信息说明",
    "group": "用户模块--_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/user/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/user.routes.js",
    "groupTitle": "用户模块--_user",
    "name": "GetApiUserFielddescription"
  },
  {
    "type": "get",
    "url": "/api/user/:id",
    "title": "查询单个用户",
    "group": "用户模块--_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/user/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/user.routes.js",
    "groupTitle": "用户模块--_user",
    "name": "GetApiUserId"
  },
  {
    "type": "get",
    "url": "/api/user/published",
    "title": "查询所有已发布用户",
    "group": "用户模块--_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/user/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/user.routes.js",
    "groupTitle": "用户模块--_user",
    "name": "GetApiUserPublished"
  },
  {
    "type": "post",
    "url": "/api/user",
    "title": "创建一个用户",
    "group": "用户模块--_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/user/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/user.routes.js",
    "groupTitle": "用户模块--_user",
    "name": "PostApiUser"
  },
  {
    "type": "put",
    "url": "/api/user/:id",
    "title": "修改单个用户",
    "group": "用户模块--_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "all",
            "description": "<p>详细字段说明看 /api/user/fieldDescription</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/modules/user.routes.js",
    "groupTitle": "用户模块--_user",
    "name": "PutApiUserId"
  }
] });
