angular.module("dataServices",[]).factory("DeferredObject",["$timeout","$q","ServiceName",function(a,b,c){return{get:function(d,e){var f=b.defer();return a(function(){f.resolve({label:c,message:d})},e),f.promise}}}]).provider("configValue",function(){var a;this.set=function(b){a=b},this.$get=function(){return{get:function(){return a}}}}).constant("ServiceName","dataServices").service("DeferredString",["$timeout","$q",function(a,b){this.get=function(c,d){var e=b.defer();return a(function(){e.resolve(c)},d),e.promise}}]).config(["configValueProvider",function(a){a.set("And config works")}]).run(["configValue","$rootScope","$timeout",function(a,b,c){c(function(){b.run_block_message="Greetings from .run"},3e3),c(function(){b.config_block_message=a.get()},4e3)}]);