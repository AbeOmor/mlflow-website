"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98],{7541:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=i(5893),r=i(1151);const l={title:"MLflow 2.3.0",slug:"2.3.0",authors:["mlflow-maintainers"]},s=void 0,a={permalink:"/mlflow-website/releases/2.3.0",source:"@site/releases/2023-04-18-2.3.0-release.md",title:"MLflow 2.3.0",description:"We are happy to announce the availability of MLflow 2.3.0!",date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[],readingTime:2.175,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.3.0",slug:"2.3.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.3.1",permalink:"/mlflow-website/releases/2.3.1"},nextItem:{title:"MLflow 2.2.2",permalink:"/mlflow-website/releases/2.2.2"}},o={authorsImageUrls:[void 0]},c=[];function d(e){const n={a:"a",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["We are happy to announce the availability of ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.3.0",children:"MLflow 2.3.0"}),"!"]}),"\n",(0,t.jsx)(n.p,{children:"MLflow 2.3.0 includes several major features and improvements"}),"\n",(0,t.jsx)(n.p,{children:"Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[Models] Introduce a new transformers named flavor (#8236, #8181, #8086, @BenWilson2)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Introduce a new openai named flavor (#8191, #8155, @harupy)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Introduce a new langchain named flavor (#8251, #8197, @liangz1, @sunishsheth2009)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Add support for Pytorch and Lightning 2.0 (#8072, @shrinath-suresh)"}),"\n",(0,t.jsx)(n.li,{children:"[Tracking] Add support for logging LLM input, output, and prompt artifacts (#8234, #8204, @sunishsheth2009)"}),"\n",(0,t.jsx)(n.li,{children:"[Tracking] Add support for HTTP Basic Auth in the MLflow tracking server (#8130, @gabrielfu)"}),"\n",(0,t.jsx)(n.li,{children:"[Tracking] Add search_model_versions to the fluent API (#8223, @mariusschlegel)"}),"\n",(0,t.jsx)(n.li,{children:"[Artifacts] Add support for parallelized artifact downloads (#8116, @apurva-koti)"}),"\n",(0,t.jsx)(n.li,{children:"[Artifacts] Add support for parallelized artifact uploads for AWS (#8003, @harupy)"}),"\n",(0,t.jsx)(n.li,{children:"[Artifacts] Add content type headers to artifact upload requests for the HttpArtifactRepository (#8048, @WillEngler)"}),"\n",(0,t.jsx)(n.li,{children:"[Model Registry] Add alias support for logged models within Model Registry (#8164, #8094, #8055 @arpitjasa-db)"}),"\n",(0,t.jsx)(n.li,{children:"[UI] Add support for custom domain git providers (#7933, @gusghrlrl101)"}),"\n",(0,t.jsx)(n.li,{children:"[Scoring] Add plugin support for customization of MLflow serving endpoints (#7757, @jmahlik)"}),"\n",(0,t.jsx)(n.li,{children:"[Scoring] Add support to MLflow serving that allows configuration of multiple inference workers (#8035, @M4nouel)"}),"\n",(0,t.jsx)(n.li,{children:"[Sagemaker] Add support for asynchronous inference configuration on Sagemaker (#8009, @thomasbell1985)"}),"\n",(0,t.jsx)(n.li,{children:"[Build] Remove shap as a core dependency of MLflow (#8199, @jmahlik)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[Models] Fix a bug with tensorflow autologging for models with multiple inputs (#8097, @jaume-ferrarons)"}),"\n",(0,t.jsx)(n.li,{children:"[Recipes] Fix a bug with Pandas 2.0 updates for profiler rendering of datetime types (#7925, @sunishsheth2009)"}),"\n",(0,t.jsx)(n.li,{children:"[Tracking] Prevent exceptions from being raised if a parameter is logged with an existing key whose value is identical to the logged parameter (#8038, @AdamStelmaszczyk)"}),"\n",(0,t.jsx)(n.li,{children:"[Tracking] Fix an issue with deleting experiments in the FileStore backend (#8178, @mariusschlegel)"}),"\n",(0,t.jsx)(n.li,{children:'[Tracking] Fix a UI bug where the "Source Run" field in the Model Version page points to an incorrect set of artifacts (#8156, @WeichenXu123)'}),"\n",(0,t.jsx)(n.li,{children:"[Tracking] Fix a bug wherein renaming a run reverts its current lifecycle status to UNFINISHED (#8154, @WeichenXu123)"}),"\n",(0,t.jsx)(n.li,{children:"[Tracking] Fix a bug where a file URI could be used as a model version source (#8126, @harupy)"}),"\n",(0,t.jsx)(n.li,{children:"[Projects] Fix an issue with MLflow projects that have submodules contained within a project (#8050, @kota-iizuka)"}),"\n",(0,t.jsx)(n.li,{children:"[Examples] Fix lightning hyperparameter tuning examples (#8039, @BenWilson2)"}),"\n",(0,t.jsx)(n.li,{children:"[Server-infra] Fix bug with Cache-Control headers for static server files (#8016, @jmahlik)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Documentation updates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[Examples] Add a new and thorough example for the creation of custom model flavors (#7867, @benjaminbluhm)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.3.0",children:"release change log"}),", and check out the latest documentation on ",(0,t.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(7294);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);