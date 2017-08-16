var glb={
	d:document,nau:navigator.userAgent,
	getId:function(id){return this.d.getElementById(id)},
	newElem:function(o){return this.d.createElement(o);},
	getElems:function(el,o){return el.getElementsByTagName(o);},
	getClass:function(cn,el,nd){
		var testClass=new RegExp("\\b"+cn+"\\b"),ar=[],el=el||this.d,nd=nd||'*',tag=this.getElems(el,nd),len=tag.length;
		for(var i=0;i<len;i++){var cel=tag[i]
		if(testClass.test(cel.className)){ar.push(cel)}}
		return ar;
	},
	st:function(){return (this.d.body.scrollTop)?this.d.body.scrollTop:this.d.documentElement.scrollTop;},
	ww:function(){return (this.d.documentElement&&this.d.documentElement.clientWidth)?this.d.documentElement.clientWidth:this.d.body.offsetWidth;},
	wh:function(){return (this.d.documentElement&&this.d.documentElement.clientHeight)?this.d.documentElement.clientHeight:this.d.body.offsetHeight;},
	offset:function(o){var y=o.offsetTop;if(o.style.position=='absolute')return y;while(o=o.offsetParent){y+=o.offsetTop;}return y;},
	addEvent:function(a,b,c,d){if(a.addEventListener){a.addEventListener(b,c,d)}else if(a.attachEvent){a.attachEvent('on'+b,c)}},
	delEvent:function (a,b,c,d){if(a.removeEventListener){a.removeEventListener(b,c,d)}else if(a.detachEvent){a.detachEvent('on'+b,c)}},
	delayLoad:function(url,callback){
		var script=this.newElem('script');
		script.type="text/javascript";
		script.src=url;
		this.d.body.appendChild(script);
		if(script.readyState){
			script.onreadystatechange=function(){
				if(script.readyState=="loaded"||script.readyState=="complete"){
					script.onreadystatechange=null;
					if(callback){callback();};
				};
			};
		}else{
			script.onload=function(){if(callback){callback();};};
		};
	}
};
glb.brow={
	isLowBrow:!-[1,],
	isIE:/MSIE/i.test(glb.nau),
	loadAds:/Android|iPhone|iTouch|BlackBerry|IEMobile/i.test(glb.nau),
	isMobile:/Android|iPhone|iTouch|iPad|BlackBerry|IEMobile|Mobile/i.test(glb.nau)
};
glb.delayLoadPic=function(area){
	var a={pics:null,len:null,picarray:[]};
	a.pics=glb.getElems(area,'img');
	a.len=a.pics.length;
	for(var i=0;i<a.len;i++){a.picarray[i]=a.pics[i];};
	a.looPic=function(){
		var reheight=glb.wh(),residue=a.picarray.length,top=null,op=null,ut=null;
		if(residue!=0){
			top=glb.d.documentElement.scrollTop||glb.d.body.scrollTop;
			for(var j=residue;j--;){
				op=a.picarray[j];
				if(op.getAttribute("data-src")){
					ut=glb.offset(op)-top;
					if(ut<reheight){
						op.src=op.getAttribute("data-src");
						op.removeAttribute('data-src');
						a.picarray.splice(j,1);
					};
				};
			};
		}else{
			glb.delEvent(window,"scroll",a.looPic,false);
			glb.delEvent(window,"resize",a.looPic,false);
		};
	};
	a.looPic();
	glb.addEvent(window,"scroll",a.looPic,false);
	glb.addEvent(window,"resize",a.looPic,false);
};
var Main=function(){
	var self=this;
	this.setCotType=function(){return (glb.brow.isMobile)?'touchstart':'click';};
	this.ebody=glb.d.body;
	this.ehtml=glb.getElems(glb.d,'html')[0];
	this.mask=glb.newElem('div');
	this.mask.className='masklayer';
	this.ebody.appendChild(this.mask);
	this.eq=this.setCotType();
	this.breakpoint=768;
	this.initNavFunction();
	this.rotateEvent();
	this.tabState({tag:'ewmarea',tab:'dt',cot:'dd',k:0});
	this.newsTabChange({tag:'newstab',taglist:'newslist',links:['m3485/list_1.shtml','5015/m3485/list_1.shtml','5016/m3485/list_1.shtml','5017/m3485/list_1.shtml','15353/m3485/list_1.shtml']});
	this.newsTabChange({tag:'widetab',taglist:'widelist',links:['5573/m3485/list_1.shtml','5573/m3485/list_1.shtml','5573/m3485/list_1.shtml','5573/m3485/list_1.shtml']});
	this.newsTabChange({tag:'tegytab',taglist:'tegylist',links:['12159/m3485/list_1.shtml','12159/m3485/list_1.shtml','12159/m3485/list_1.shtml','12159/m3485/list_1.shtml']});
	if(glb.brow.isMobile){this.ebody.className+=' mobileEM';}else{return;};
};
Main.prototype.tabState=function(o){
	var self=this,father=glb.getId(o.tag),tabs=glb.getElems(father,o.tab),cots=glb.getElems(father,o.cot),curdt=null,curdd=null,k=o.k||0,setClass=function(){
		curdt.className+=' cur';
		curdd.className+=' cur';
	};
	for(var i=0,len=tabs.length;i<len;i++){
		(function(n){
			tabs[n].onclick=function(){
				if(curdt&&curdd){
					curdt.className=curdt.className.replace(/ cur/,'');
					curdd.className=curdd.className.replace(/ cur/,'');
				};
				curdt=this;
				curdd=cots[n];
				setClass();
			};
		})(i);
	};
	curdt=tabs[k];
	curdd=cots[k];
	setClass();
};

Main.prototype.getShotDate=function(time){
	var time=time.split(' ')[0].split('-');
	return time[1]+'/'+time[2];
};
Main.prototype.moduleSplic=function(data){
	var self=this,div=glb.newElem('div'),ul=glb.newElem('ul'),dom=glb.d.createDocumentFragment(),pics=[],lists=[];
	div.className='qz-pics';
	ul.className='newslists';
	for(var i=0,len=data.length;i<len;i++){
		var c=data[i];
		if(i<2){
			pics.push('<a class="qz-pic-a" href="/trq/detail.shtml?iContentId='+c.iContentId+'" onclick="pgvSendClick({hottag:\'official.main.quanzi.cover\'});" target="_blank" title="'+c.sTitle+'"><img alt="'+c.sTitle+'" src="'+((c.sCoverUrl+'296').replace(/http:/i,''))+'"></a>');
		}else{
			lists.push('<li class="nl-i"><a class="cltit" target="_blank" href="/trq/detail.shtml?iContentId='+c.iContentId+'" onclick="pgvSendClick({hottag:\'official.main.quanzi.list\'});">'+c.sTitle+'</a><span class="cltime">'+(self.getShotDate(c.dtCreateTime))+'</span></li>');
		};
	};
	div.innerHTML=pics.join('');ul.innerHTML=lists.join('');
	dom.appendChild(div);dom.appendChild(ul);
	// self.curdd.removeChild(self.ldtips);
	self.curdd.appendChild(dom);
};
Main.prototype.initNavFunction=function(){
	var self=this,mainNav=glb.getId('mainNav'),navi=glb.getId('navi'),navSliderEvent=function(e){
		var e=e||window.event;
		e.preventDefault();
		var nowClass=mainNav.className;
		if(/\bfadeInLeft\b/i.test(nowClass)){mainNav.className=nowClass.replace(/fadeInLeft/,'fadeOutLeft');setNavHidn();return;};
		if(/\bfadeOutLeft\b/i.test(nowClass)){mainNav.className=nowClass.replace(/fadeOutLeft/,'fadeInLeft');setNavHidn(1);return;};
		mainNav.className+=' fadeOutLeft';
		var flag=(mainNav.style.cssText=='')?0:1;
		setNavHidn(flag);
	},setNavHidn=function(is){
		self.ebody.style.height=self.ehtml.style.height=(is)?'auto':'100%';
		self.ebody.style.overflowY=self.ehtml.style.overflowY=(is)?'auto':'hidden';
		self.mask.style.display=(is)?'none':'block';
		if(is){glb.delEvent(self.mask,self.eq,navSliderEvent,false);}else{glb.addEvent(self.mask,self.eq,navSliderEvent,false);};
	},screenChange=function(){
		if(glb.ww()>self.breakpoint){
			setNavHidn(1);
			mainNav.className='mnav';
		};
	};
	screenChange();
	glb.addEvent(navi,self.eq,navSliderEvent,false);
	glb.addEvent(window,'resize',screenChange,false);
};
Main.prototype.setNavHidn=function(is){
	var self=this;
	self.ebody.style.height=self.ehtml.style.height=(is)?'auto':'100%';
	self.ebody.style.overflowY=self.ehtml.style.overflowY=(is)?'auto':'hidden';
	self.mask.style.display=(is)?'none':'block';
};
Main.prototype.navSliderEvent=function(o){
	var nowClass=o.mainNav.className;
	if(/\bfadeInLeft\b/i.test(nowClass)){o.mainNav.className=nowClass.replace(/fadeInLeft/,'fadeOutLeft');o.setNavHidn(1);return;};
	if(/\bfadeOutLeft\b/i.test(nowClass)){o.mainNav.className=nowClass.replace(/fadeOutLeft/,'fadeInLeft');o.setNavHidn();return;};
	o.mainNav.className+=' fadeInLeft';
	o.setNavHidn();
};
Main.prototype.rotateEvent=function(){
	var self=this,a={
		box:glb.getId('rotate_content'),rotate:glb.getId('rotate'),cate:glb.getId('cate'),indrt:glb.getId('indrt'),li:null,span:null,width:null,target:null,flag:null,bk:null,
		rotID:'14994',picurl:'//game.gtimg.cn/upload/adw/',allrot:null,len:7,index:0,n:0,cachewidth:null
	},domChage=function(){
		if(a.curli&&a.curspan){a.curli.className=a.curspan.className='';};
		a.curli=a.li[a.n];
		a.curspan=a.span[a.n];
		a.curli.className=a.curspan.className='cur';
		a.rotate.style.left=-(a.width*a.n)+'px';
		EAS.ADShow('"'+a.urls[a.n]+'"');
	},pcControl=function(e){
		clearInterval(a.flag);
		var e=e||window.event;
		a.target=e.target||e.srcElement;
		if('SPAN'==a.target.nodeName&&''==a.target.className){
			a.n=a.target.getAttribute('data-id');
			domChage();
		};
	},hdControl=function(){
		var b={point:null,initmX:null,initmY:null,mX:null,mY:null,initleft:null,mX:null,mY:null};
		glb.addEvent(a.rotate,'touchstart',function(e){
			clearInterval(a.flag);
			b.point=e.touches[0];
			b.mX=0;b.mY=0;
			b.initmX=b.point.clientX;
			b.initmY=b.point.clientY;
			b.initleft=a.rotate.offsetLeft;
		});
		glb.addEvent(a.rotate,'touchmove',function(e){
			clearInterval(a.flag);
			e.preventDefault();
			b.point=e.touches[0];
			b.mX=b.point.pageX;
			if(!((a.n==0&&b.mX-b.initmX>0)||(a.n==(a.index-1)&&b.mX-b.initmX<0))){
				a.rotate.style.webkitTransition=a.rotate.style.mozTransition=a.rotate.style.oTransition=a.rotate.style.msTransition=a.rotate.style.transition='none';
				a.rotate.style.left=b.initleft+(b.mX-b.initmX)+'px';
			};
		});
		glb.addEvent(a.rotate,'touchend',function(e){
			a.rotate.style.webkitTransition=a.rotate.style.mozTransition=a.rotate.style.oTransition=a.rotate.style.msTransition=a.rotate.style.transition='left .2s ease 0s';
			if(b.mX!=0&&(b.mX-b.initmX)>0){ //右滑
				a.n=(a.n>0&&b.mX-b.initmX>80)?--a.n:a.n;
			}else if(b.mX!=0&&(b.mX-b.initmX)<0){ //左滑
				a.n=(a.n<(a.index-1)&&b.mX-b.initmX<-80)?++a.n:a.n;
			};
			domChage();
			autoRotate();
		});
	},autoRotate=function(){
		a.flag=setInterval(function(){
			a.n=(a.n<(a.index-1))?++a.n:0;
			domChage();
		},5000);
	},reSetRotate=function(){
		clearInterval(a.flag);a.n=0;a.urls=[];
		a.cachewidth=a.width=a.box.clientWidth;
		if(!a['picAR'+a.rotID]){
			a.index=0;
			a.allrot=window['oDaTaNew'+a.rotID];
			a['picAR'+a.rotID]=[];a['indAR'+a.rotID]=[];
			for(var datas in a.allrot){
				a.urls.push(a.allrot[datas][1]);
				a['picAR'+a.rotID].push('<li style="width:'+a.width+'px;" class="'+((0==a.index)?'cur':'')+'"><a href="'+a.allrot[datas][1]+'" target="_blank" onclick="EAS.ADClick(&apos;'+a.allrot[datas][1]+'&apos;);"><img src="'+(a.picurl+a.allrot[datas][2])+'" alt="'+decodeURIComponent(a.allrot[datas][0])+'"></a></li>');
				//a['indAR'+a.rotID].push('<span class="'+((0==a.index)?'cur':'')+'" data-id="'+a.index+'"><strong>'+(++a.index)+'</strong><a class="rotate_name" href="'+a.allrot[datas][1]+'"><b>'+decodeURIComponent(a.allrot[datas][0])+'</b></a></span>');
				a['indAR'+a.rotID].push('<span class="'+((0==a.index)?'cur':'')+'" data-id="'+(a.index++)+'">'+decodeURIComponent(a.allrot[datas][0])+'</span>');
			};
		}else{
			a.index=a['picAR'+a.rotID].length;
		};
		a.rotate.style.width=(a.width*a.index)+'px';
		a.rotate.innerHTML=a['picAR'+a.rotID].join('');
		a.indrt.innerHTML=a['indAR'+a.rotID].join('');
		a.li=glb.getElems(a.rotate,'li');
		a.span=glb.getElems(a.indrt,'span');
		domChage();
		autoRotate();
	},writeRTs=function(){
		reSetRotate();
		if(!glb.brow.isMobile){
			glb.addEvent(a.indrt,'mouseover',pcControl,false);
			glb.addEvent(a.indrt,'mouseout',autoRotate,false);
		}else{
			a.indrt.className+=' handheld';hdControl();
		};
		glb.addEvent(window,'resize',function(){
			clearInterval(a.flag);
			clearTimeout(a.bk);
			a.width=a.box.clientWidth;
			a.rotate.style.webkitTransition=a.rotate.style.mozTransition=a.rotate.style.oTransition=a.rotate.style.msTransition=a.rotate.style.transition='none';
			if(a.cachewidth!=a.width){
				var w=(a.width>a.cachewidth)?a.rotate.offsetLeft-(Math.abs(a.width-a.cachewidth)*a.n):a.rotate.offsetLeft+(Math.abs(a.width-a.cachewidth)*a.n);
				a.rotate.style.left=w+'px';
				a.cachewidth=a.width;
				a.rotate.style.width=(a.width*a.index)+'px';
				for(var i=0;i<a.index;i++){a.li[i].style.width=a.width+'px';};
			};
			a.bk=setTimeout(function(){
				a.rotate.style.webkitTransition=a.rotate.style.mozTransition=a.rotate.style.oTransition=a.rotate.style.msTransition=a.rotate.style.transition='left .2s ease 0s';
				autoRotate();
			},100);
		});
	},cateEvent=function(){
		var clkTag=glb.getElems(cate,'a'),cur=clkTag[0],toGetId=function(e){
			var e=e||window.event,target=e.target||e.srcElement;
			if('A'==target.nodeName){
				var id=target.getAttribute('data-id');
				if(a.rotID!=id){
					cur.className='';
					cur=target;
					cur.className='cur';
					a.rotID=id;
					a.rotate.innerHTML='<p class="loading">加载中...</p>';
					if(a['picAR'+a.rotID]){
						reSetRotate()
					}else{
						toLoadJson(function(){reSetRotate()});
					};
				}else{return;};
			}else{return;};
		};
		cur.className='cur';
		glb.addEvent(cate,'click',toGetId,false);
	}(),toLoadJson=function(callback){
		glb.delayLoad('//game.qq.com/time/qqadv/Info_new_'+a.rotID+'.js?v='+Math.random(),callback);
	};
	toLoadJson(function(){writeRTs();});
	self.gameData();
};
Main.prototype.sliderLine=function(line,left){line.style.left=left+'px';};
Main.prototype.newsTabChange=function(o){
	var self=this,url='/webplat/info/news_version3/5012/5013/5014/',morelink=o.links,cur=null,
	newstab=glb.getId(o.tag),line=glb.getClass('bdbotline',newstab,'em')[0],more=glb.getClass('morer',newstab,'a')[0],cfs=glb.getClass('cf',newstab,'a'),
	lineWidth=line.clientWidth,newslist=glb.getId(o.taglist),boxWidth=newslist.clientWidth,newsbox=glb.getClass('newslists',newslist),changeTabs=function(e){
		var e=e||window.event,target=e.target||e.srcElement;
		if("A"==target.nodeName&&/\bcf\b/i.test(target.className)){
			if(glb.brow.isIE){lineWidth=line.clientWidth;};
			n=parseInt(target.getAttribute('data-cf'));
			self.sliderLine(line,lineWidth*n);
			newslist.style.left=-(boxWidth*n)+'px';
			cur.className=cur.className.replace(/ cur/i,'');
			cur=target;
			cur.className+=' cur';
		};
	};
	cur=cfs[0];
	cur.className+=' cur';
	for(var i=0,len=newsbox.length;i<len;i++){newsbox[i].style.width=boxWidth+'px';};
	newslist.style.width=(boxWidth*len)+'px';
	glb.addEvent(newstab,self.eq,changeTabs,false);
};
Main.prototype.gameData=function(){
	var self=this,aucer={},biuldElem=function(g){
		var el=glb.newElem(g.el);el.className=g.cl||'';el.id=g.id||'';return el;
	},reSetPos=function(n,cli){
		if(aucer.li){aucer.li.className='';}else{aucer.li=glb.getElems(datatab,'li')[n];};
		if(aucer.role&&aucer.intro){aucer.role.style.right='-100%';aucer.intro.style.left='-100%';};
		aucer.role=role[n];aucer.intro=intro[n];
		aucer.role.style.right=0;aucer.intro.style.left=0;
		aucer.li=cli||aucer.li;aucer.li.className='cur';
	},fun={
		united:function(){
            var el=biuldElem({el:'div',cl:'cotpart',id:'mps'}),
            curFunc=function(){
                var s='',c=null;
				for(var i=0,len=data_game_united.lists.length;i<len;i++){
					c=data_game_united.lists[i];
					s+='<div class="mp-role '+c.cl+'"></div><div class="mp-intro"><h3>'+c.united_name+'</h3><p class="mp-tw">'+c.tw+'</p>';
					s+='<p class="mp-wp"><b>VK chính: '+c.wp[0][0]+'</b><b>VK phụ: '+c.wp[1][0]+'</b></p><p class="mp-level"><b>Độ khó</b>';
					for(var k=0,sun=5;k<sun;k++){
                        if(k<c.level){s+='<i class="has"></i>';}
                        else{s+='<i class="nos"></i>';};
                    };
					s+='</p><p class="more"><a class="morer greenbtn" href="'+c.lk+'">Chi tiết</a><a class="morer blackbtn" href="'+c.gl+'" target="_blank">Thêm</a></p></div>';
				};
				el.innerHTML=s;
				datatab.parentNode.appendChild(el);
				role=glb.getClass('mp-role',glb.getId('mps'),'div');
				intro=glb.getClass('mp-intro',glb.getId('mps'),'div');
                reSetPos(0);
			};
			glb.delayLoad('http://rawgit.com/lhq220/thc/master/js/gamedata_united.js',curFunc);
		}
    },n=null,datatab=glb.getId('datatab'),line=glb.getClass('bdbotline',datatab,'em')[0],lineWidth=line.clientWidth,role=null,intro=null,
    changeTabs=function(e){
		var e=e||window.event,target=e.target||e.srcElement,f=null;
		if("A"==target.nodeName&&/\bcf\b/i.test(target.className)){
			n=parseInt(target.getAttribute('data-cf'));
			self.sliderLine(line,lineWidth*n);
			reSetPos(n,target.parentNode);
		};
	};
	glb.addEvent(datatab,self.eq,changeTabs,false);
	fun.united();
},dataProcess=function(info){
	var dom;
	if(!(info.iRet<0)&&info.jData.data&&info.jData.total!=0){
		var data=info.jData.data;
		if(data.length!=0){
			m.moduleSplic(data);
		};
		return;
	}else{
		m.ldtips.innerText=info.sMsg;
	};
};;
var m=new Main();

speed_load=new Date();

function getElementsByClassName(className, element) {
    var children = (element || document).getElementsByTagName('*');
    var elements = [];
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var classNames = child.className.split(' ');
        for (var j = 0; j < classNames.length; j++) {
            if (classNames[j] == className) {
                elements.push(child);
                break
            }
        }
    }
    return elements
};
var tabs = function(id, cls, options) {
    this.container = document.getElementById(id);
    this.panel = getElementsByClassName(cls, this.container);
    this.t = null;
    this.index = 0;
};
var tabs01 = new tabs("tab", "tab-panel", {
    timeout: 80,//延迟切换时间。默认参数为60;
    currCls: "on",//设置当前标签（li）class 名。默认参数为&quot;on&quot;;
    disCls: "dis",//控制显示class名。默认参数为&quot;dis&quot;;
    event: "mouseover",//事件类型。默认为&quot;mouseover&quot;;
    auto: true,//是否自动切换。默认为false
    Pause: 300 //每次自动停顿时间(auto为true时有效)
});
// 插入数据
$(".conlist").append($(".onlist"));
$(".nav_gg").append($(".gg_load").html());

$(".newsbox .on").on("mouseenter",function() {
    var list = $(".newsbox ul"),
        that = $(this),
        topt = $(".toptitle em:eq(0)"),
        more = $(".newsbox .toptitle a");
        if( that.text() == "综合资讯" ) {
            list.siblings().addClass('onlist');
            list.eq(1).removeClass('onlist');
            that.text("最新资讯");
            topt.text("综合资讯");
            $(".newsbox .toptitle a")[0].href = "//wuxia.qq.com/webplat/info/news_version3/5012/16799/16827/m12360/list_1.shtml";
        }else{
            list.siblings().removeClass('onlist');
            list.eq(1).addClass('onlist');
            that.text("综合资讯");
            topt.text("最新资讯");
            $(".newsbox .toptitle a")[0].href = "//wuxia.qq.com/webplat/info/news_version3/5012/16799/m12360/list_1.shtml";
        }
});

$(".play_a").not(".play_a_no").on("mouseover", function () {
    var $on = $(".pay_on");
    $(".acc_box").stop().animate({ width: 58 }, 450, function () { $on.removeClass("pay_on"); });
    $(this).parents(".acc_box").stop().animate({ width: 428 }, 450, function () { $(this).addClass("pay_on"); });
    $(".play_a").css("display", "block");
    $(this).css("display", "none");
});
