add new js
/**
 * @returns {Network}
 */
function Com()
{
	/**
	 * 获取MAC地址
	 */
   this.getMac=function ()
   { 
	   var object=this.getObject();
	   if (object)
	   {		
		  var result=object.GetMac();				
		  return result;
	   }
   };
   /**
	 * 获取IP
	 */
   this.getIp=function ()
   {
	   var object=this.getObject();	  
	   if (object)
	   {		
		  var result=object.getIp();		  
		  return result;
	   }
	   return null;
   };
   
   /**
	 * 压缩字符串
	 * param 要压缩的字符串
	 * @returns 压缩后的数据
	 */
  this.compress=function (str)
  {   
	   var object=this.getObject();	  
	   if (object)
	   {		
		  var result=object.ZipStr(str);		  
		  return result;
	   }
  };
  this.uncompress=function (str,onSuccess,onError)
  {
	   var object=this.getObject();
	   if (object)
	   {
		  var result=object.UnZipStr(str);		  
		  return result;
	   }
  };
  /**
	 * 压缩字符串后转成Base64
	 * param 要压缩的字符串
	 * @returns 压缩后的Base64数据
	 */
  this.compressToBase64=function (str)
  {
	   var object=this.getObject();
	   
	   if (object)
	   {		  
		  var result=object.ZipStrToBs64(str);
		  return result;
	   }	 
	   return null;
  };
  this.uncompressFromBase64=function (str,onSuccess,onError)
  {
	   var object=this.getObject();
	   if (object)
	   {
		  var result=object.Bs64ToUnZipStr(str);		  
		  return result;
	   }
  };
  /**
	 * 转换字符串成Base64
	 * param 要转换的字符串
	 * @returns 转换后的Base64数据
	 */
  this.toBase64=function (str)
  {
	   var object=this.getObject();
	   if (object)
	   {
		  var result=object.StrToBs64(str);		  
		  return result;
	   }
  };
  
  this.fromBase64=function (str)
  {
	   var object=this.getObject();
	   if (object)
	   {
		  var result=object.Bs64ToStr(str);		  
		  return result;
	   }
  };
  
  this.getInstance=function (className)
  {
	   var object=this.getObject();
	   if (object)
	   {
		  var result=object.DoAppMethod(className);		  
		  return result;
	   }
  };
 
   
   this.getObject=function ()
   {
	   try
       {
           var o = new ActiveXObject("xyhsoft.basic");        
           return o;
       } catch (e)
       {  
    	   window.openDialog("ComInstallDialog",baseUrl+"/commons/activex/xyhbase.jsp", "新益华基础组件安装", null, null,380,180);    
    	   throw "调用基础组件出错!";
       }	   
   };
   
   
}
