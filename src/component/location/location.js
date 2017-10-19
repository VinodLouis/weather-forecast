import React, { Component } from 'react';

export default{
    getLocation:function(cb){
        if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition((pos)=>{
            cb({status:"success",data:pos});
           },(err)=>{
            cb({status:"error",data:err});
           });
        } else {
           cb({status:"error",msg:"NO_SUPPORT"});
        }
    }
}
