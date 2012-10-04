/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("datatable-head",function(e){var c=e.Lang,d=c.sub,a=c.isArray,b=e.Array;e.namespace("DataTable").HeaderView=e.Base.create("tableHeader",e.View,[],{CELL_TEMPLATE:'<th id="{id}" colspan="{_colspan}" rowspan="{_rowspan}" class="{className}" scope="col" {_id}{abbr}>{content}</th>',ROW_TEMPLATE:"<tr>{content}</tr>",THEAD_TEMPLATE:'<thead class="{className}"></thead>',getClassName:function(){var f=this.host,g=(f&&f.constructor.NAME)||this.constructor.NAME;if(f&&f.getClassName){return f.getClassName.apply(f,arguments);}else{return e.ClassNameManager.getClassName.apply(e.ClassNameManager,[g].concat(b(arguments,0,true)));}},render:function(){var s=this.get("container"),p=this.theadNode||(this.theadNode=this._createTHeadNode()),g=this.columns,h={_colspan:1,_rowspan:1,abbr:""},l,n,k,r,f,m,o,q;if(p&&g){m="";if(g.length){for(l=0,n=g.length;l<n;++l){o="";for(k=0,r=g[l].length;k<r;++k){f=g[l][k];q=e.merge(h,f,{className:this.getClassName("header"),content:f.label||f.key||("Column "+(k+1))});q._id=f._id?' data-yui3-col-id="'+f._id+'"':"";if(f.abbr){q.abbr=' abbr="'+f.abbr+'"';}if(f.className){q.className+=" "+f.className;}if(f._first){q.className+=" "+this.getClassName("first","header");}if(f._id){q.className+=" "+this.getClassName("col",f._id);}o+=d(f.headerTemplate||this.CELL_TEMPLATE,q);}m+=d(this.ROW_TEMPLATE,{content:o});}}p.setHTML(m);if(p.get("parentNode")!==s){s.insertBefore(p,s.one("tfoot, tbody"));}}this.bindUI();return this;},_afterColumnsChange:function(f){this.columns=this._parseColumns(f.newVal);this.render();},bindUI:function(){if(!this._eventHandles.columnsChange){this._eventHandles.columnsChange=this.after("columnsChange",e.bind("_afterColumnsChange",this));}},_createTHeadNode:function(){return e.Node.create(d(this.THEAD_TEMPLATE,{className:this.getClassName("columns")}));},destructor:function(){(new e.EventHandle(e.Object.values(this._eventHandles))).detach();},initializer:function(f){this.host=f.host;this.columns=this._parseColumns(f.columns);this._eventHandles=[];},_parseColumns:function(m){var h=[],p=[],o=1,r,s,g,f,q,l,n,k;if(a(m)&&m.length){m=m.slice();p.push([m,-1]);while(p.length){r=p[p.length-1];s=r[0];l=r[1]+1;for(n=s.length;l<n;++l){s[l]=g=e.merge(s[l]);f=g.children;e.stamp(g);if(!g.id){g.id=e.guid();}if(a(f)&&f.length){p.push([f,-1]);r[1]=l;o=Math.max(o,p.length);break;}else{g._colspan=1;}}if(l>=n){if(p.length>1){r=p[p.length-2];q=r[0][r[1]];q._colspan=0;for(l=0,n=s.length;l<n;++l){s[l]._parent=q;q._colspan+=s[l]._colspan;}}p.pop();}}for(l=0;l<o;++l){h.push([]);}p.push([m,-1]);while(p.length){r=p[p.length-1];s=r[0];l=r[1]+1;for(n=s.length;l<n;++l){g=s[l];f=g.children;h[p.length-1].push(g);r[1]=l;g._headers=[g.id];for(k=p.length-2;k>=0;--k){q=p[k][0][p[k][1]];g._headers.unshift(q.id);}if(f&&f.length){p.push([f,-1]);break;}else{g._rowspan=o-p.length+1;}}if(l>=n){p.pop();}}}for(l=0,n=h.length;l<n;l+=g._rowspan){g=h[l][0];g._first=true;}return h;}});},"3.7.1pr1",{requires:["datatable-core","view","classnamemanager"]});