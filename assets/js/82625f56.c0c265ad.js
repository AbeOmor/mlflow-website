"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6926],{8360:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(5893),l=o(1151);const s={title:"MLflow 1.12.0",slug:"1.12.0",authors:["mlflow-maintainers"]},i=void 0,a={permalink:"/mlflow-website/releases/1.12.0",source:"@site/releases/2020-11-11-1.12.0-release.md",title:"MLflow 1.12.0",description:"We are happy to announce the availability of MLflow 1.12.0!",date:"2020-11-11T00:00:00.000Z",formattedDate:"November 11, 2020",tags:[],readingTime:.82,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.12.0",slug:"1.12.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.12.1",permalink:"/mlflow-website/releases/1.12.1"},nextItem:{title:"MLflow 1.11.0",permalink:"/mlflow-website/releases/1.11.0"}},r={authorsImageUrls:[void 0]},c=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We are happy to announce the availability of ",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.12.0",children:"MLflow 1.12.0"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:"In addition to bug and documentation fixes, MLflow 1.12.0 includes several major features and improvements, in particular a number of improvements to MLflow's Pytorch integrations and autologging:"}),"\n",(0,n.jsx)(t.p,{children:"PyTorch"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"mlflow.pytorch.log_model"}),", ",(0,n.jsx)(t.code,{children:"mlflow.pytorch.load_model"})," now support logging/loading TorchScript models (#3557, @shrinath-suresh)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"mlflow.pytorch.log_model"})," supports passing ",(0,n.jsx)(t.code,{children:"requirements_file"})," & ",(0,n.jsx)(t.code,{children:"extra_files"})," arguments to log additional artifacts along with a model (#3436, @shrinath-suresh)"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Autologging"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Add universal ",(0,n.jsx)(t.code,{children:"mlflow.autolog"})," which enables autologging for all supported integrations (#3561, #3590, @andrewnitu)"]}),"\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.code,{children:"mlflow.pytorch.autolog"})," API for automatic logging of metrics, params, and models from Pytorch Lightning training (#3601, @shrinath-suresh, #3636, @karthik-77). This API is also enabled by ",(0,n.jsx)(t.code,{children:"mlflow.autolog"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Scikit-learn, XGBoost, and LightGBM autologging now support logging model signatures and input examples (#3386, #3403, #3449, @andrewnitu)"}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"mlflow.sklearn.autolog"})," now supports logging metrics (e.g. accuracy) and plots (e.g. confusion matrix heat map) (#3423, #3327, @willzhan-db, @harupy)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For a comprehensive list of changes, see the ",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.12.0",children:"release change log"}),", and check out the latest documentation on ",(0,n.jsx)(t.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var n=o(7294);const l={},s=n.createContext(l);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);