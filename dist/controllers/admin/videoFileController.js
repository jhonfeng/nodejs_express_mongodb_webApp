"use strict";var mongoose=require("mongoose"),videoInfoModel=mongoose.model("videoInfo"),formidable=require("formidable"),path=require("path"),fs=require("fs");exports.uploadFile=function(e,o){var i=new formidable.IncomingForm;i.uploadDir=path.join(__dirname,"../../../upload/vides/"),i.keepExtensions=!0,o.set({"Content-Type":"text/html; charset=UTF-8"}),i.parse(e,function(e,o,n){var r=path.extname(n.mp4file.name),a=Math.random()+r,t=n.mp4file.path,d=path.join(i.uploadDir,a);fs.renameSync(t,d);var p=o.id;videoInfoModel.update({_id:p},{src:a},{},function(e){if(e)throw e;console.log("上传成功")})}),o.end('<script>alert("上传成功");window.location="/admin/videoInfo";</script>')};