"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3221],{7858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=t(5893),r=t(1151);const l={title:"MLflow 1.20.0",authors:["mlflow-maintainers"]},i=void 0,s={permalink:"/mlflow-site-refresh/releases/2021/08/26/1.20.0-release",source:"@site/releases/2021-08-26-1.20.0-release.md",title:"MLflow 1.20.0",description:"We are happy to announce the availability of MLflow 1.20.0!",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[],readingTime:1.62,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.20.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.20.2",permalink:"/mlflow-site-refresh/releases/2021/09/03/1.20.2-release"},nextItem:{title:"MLflow 1.20.1",permalink:"/mlflow-site-refresh/releases/2021/08/26/1.20.1-release"}},a={authorsImageUrls:[void 0]},c=[];function d(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["We are happy to announce the availability of ",(0,o.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.20.0",children:"MLflow 1.20.0"}),"!"]}),"\n",(0,o.jsx)(n.p,{children:"Note: The MLflow R package for 1.20.0 is not yet available but will be in a week because CRAN's submission system will be offline until September 1st."}),"\n",(0,o.jsx)(n.p,{children:"In addition to bug and documentation fixes, MLflow 1.20.0 includes the following features and improvements:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Autologging for scikit-learn now records post training metrics when scikit-learn evaluation APIs, such as ",(0,o.jsx)(n.code,{children:"sklearn.metrics.mean_squared_error"}),", are called (#4491, #4628 #4638, @WeichenXu123)"]}),"\n",(0,o.jsxs)(n.li,{children:["Autologging for PySpark ML now records post training metrics when model evaluation APIs, such as ",(0,o.jsx)(n.code,{children:"Evaluator.evaluate()"}),", are called (#4686, @WeichenXu123)"]}),"\n",(0,o.jsxs)(n.li,{children:["Add ",(0,o.jsx)(n.code,{children:"pip_requirements"})," and ",(0,o.jsx)(n.code,{children:"extra_pip_requirements"})," to ",(0,o.jsx)(n.code,{children:"mlflow.*.log_model"})," and ",(0,o.jsx)(n.code,{children:"mlflow.*.save_model"})," for directly specifying the pip requirements of the model to log / save (#4519, #4577, #4602, @harupy)"]}),"\n",(0,o.jsxs)(n.li,{children:["Added ",(0,o.jsx)(n.code,{children:"stdMetrics"})," entries to the training metrics recorded during PySpark CrossValidator autologging (#4672, @WeichenXu123)"]}),"\n",(0,o.jsxs)(n.li,{children:["MLflow UI updates:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Improved scalability of the parallel coordinates plot for run performance comparison,"}),"\n",(0,o.jsx)(n.li,{children:"Added support for filtering runs based on their start time on the experiment page,"}),"\n",(0,o.jsx)(n.li,{children:"Added a dropdown for runs table column sorting on the experiment page,"}),"\n",(0,o.jsx)(n.li,{children:"Upgraded the AG Grid plugin, which is used for runs table loading on the experiment page, to version 25.0.0,"}),"\n",(0,o.jsx)(n.li,{children:"Fixed a bug on the experiment page that caused the metrics section of the runs table to collapse when selecting columns from other table sections (#4712, @dbczumar)"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Added support for distributed execution to autologging for PyTorch Lightning (#4717, @dbczumar)"}),"\n",(0,o.jsx)(n.li,{children:"Expanded R support for Model Registry functionality (#4527, @bramrodenburg)"}),"\n",(0,o.jsx)(n.li,{children:"Added model scoring server support for defining custom prediction response wrappers (#4611, @Ark-kun)"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"mlflow.*.log_model"})," and ",(0,o.jsx)(n.code,{children:"mlflow.*.save_model"})," now automatically infer the pip requirements of the model to log / save based on the current software environment (#4518, @harupy)"]}),"\n",(0,o.jsx)(n.li,{children:"Introduced support for running Sagemaker Batch Transform jobs with MLflow Models (#4410, #4589, @YQ-Wang)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,o.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.20.0",children:"release change log"}),", and check out the latest documentation on ",(0,o.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(7294);const r={},l=o.createContext(r);function i(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);