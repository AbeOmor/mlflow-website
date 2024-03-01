"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2035],{5372:(l,e,t)=>{t.r(e),t.d(e,{assets:()=>n,contentTitle:()=>r,default:()=>u,frontMatter:()=>h,metadata:()=>o,toc:()=>a});var i=t(5893),s=t(1151);const h={title:"MLflow 2.3.0",slug:"2.3.0",authors:["mlflow-maintainers"]},r=void 0,o={permalink:"/mlflow-website/releases/2.3.0",source:"@site/releases/2023-04-18-2.3.0-release.md",title:"MLflow 2.3.0",description:"We are happy to announce the availability of MLflow 2.3.0!",date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[],readingTime:2.175,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.3.0",slug:"2.3.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.3.1",permalink:"/mlflow-website/releases/2.3.1"},nextItem:{title:"MLflow 2.2.2",permalink:"/mlflow-website/releases/2.2.2"}},n={authorsImageUrls:[void 0]},a=[];function c(l){const e={a:"a",li:"li",p:"p",ul:"ul",...(0,s.a)(),...l.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["We are happy to announce the availability of ",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.3.0",children:"MLflow 2.3.0"}),"!"]}),"\n",(0,i.jsx)(e.p,{children:"MLflow 2.3.0 includes several major features and improvements"}),"\n",(0,i.jsx)(e.p,{children:"Features:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["[Models] Introduce a new transformers named flavor (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8236",children:"#8236"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8181",children:"#8181"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8086",children:"#8086"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Models] Introduce a new openai named flavor (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8191",children:"#8191"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8155",children:"#8155"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Models] Introduce a new langchain named flavor (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8251",children:"#8251"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8197",children:"#8197"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/liangz1",children:"@liangz1"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Models] Add support for Pytorch and Lightning 2.0 (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8072",children:"#8072"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/shrinath-suresh",children:"@shrinath-suresh"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Tracking] Add support for logging LLM input, output, and prompt artifacts (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8234",children:"#8234"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8204",children:"#8204"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Tracking] Add support for HTTP Basic Auth in the MLflow tracking server (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8130",children:"#8130"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/gabrielfu",children:"@gabrielfu"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Tracking] Add search_model_versions to the fluent API (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8223",children:"#8223"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/mariusschlegel",children:"@mariusschlegel"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Artifacts] Add support for parallelized artifact downloads (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8116",children:"#8116"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/apurva-koti",children:"@apurva-koti"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Artifacts] Add support for parallelized artifact uploads for AWS (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8003",children:"#8003"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Artifacts] Add content type headers to artifact upload requests for the HttpArtifactRepository (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8048",children:"#8048"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/WillEngler",children:"@WillEngler"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Model Registry] Add alias support for logged models within Model Registry (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8164",children:"#8164"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8094",children:"#8094"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8055",children:"#8055"})," ",(0,i.jsx)(e.a,{href:"https://github.com/arpitjasa-db",children:"@arpitjasa-db"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[UI] Add support for custom domain git providers (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/7933",children:"#7933"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/gusghrlrl101",children:"@gusghrlrl101"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Scoring] Add plugin support for customization of MLflow serving endpoints (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/7757",children:"#7757"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/jmahlik",children:"@jmahlik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Scoring] Add support to MLflow serving that allows configuration of multiple inference workers (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8035",children:"#8035"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/M4nouel",children:"@M4nouel"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Sagemaker] Add support for asynchronous inference configuration on Sagemaker (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8009",children:"#8009"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/thomasbell1985",children:"@thomasbell1985"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Build] Remove shap as a core dependency of MLflow (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8199",children:"#8199"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/jmahlik",children:"@jmahlik"}),")"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Bug fixes:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["[Models] Fix a bug with tensorflow autologging for models with multiple inputs (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8097",children:"#8097"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/jaume-ferrarons",children:"@jaume-ferrarons"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Recipes] Fix a bug with Pandas 2.0 updates for profiler rendering of datetime types (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/7925",children:"#7925"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Tracking] Prevent exceptions from being raised if a parameter is logged with an existing key whose value is identical to the logged parameter (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8038",children:"#8038"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/AdamStelmaszczyk",children:"@AdamStelmaszczyk"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Tracking] Fix an issue with deleting experiments in the FileStore backend (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8178",children:"#8178"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/mariusschlegel",children:"@mariusschlegel"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:['[Tracking] Fix a UI bug where the "Source Run" field in the Model Version page points to an incorrect set of artifacts (',(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8156",children:"#8156"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Tracking] Fix a bug wherein renaming a run reverts its current lifecycle status to UNFINISHED (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8154",children:"#8154"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Tracking] Fix a bug where a file URI could be used as a model version source (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8126",children:"#8126"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Projects] Fix an issue with MLflow projects that have submodules contained within a project (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8050",children:"#8050"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/kota-iizuka",children:"@kota-iizuka"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Examples] Fix lightning hyperparameter tuning examples (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8039",children:"#8039"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[Server-infra] Fix bug with Cache-Control headers for static server files (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/8016",children:"#8016"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/jmahlik",children:"@jmahlik"}),")"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Documentation updates:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["[Examples] Add a new and thorough example for the creation of custom model flavors (",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/pull/7867",children:"#7867"}),", ",(0,i.jsx)(e.a,{href:"https://github.com/benjaminbluhm",children:"@benjaminbluhm"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["For a comprehensive list of changes, see the ",(0,i.jsx)(e.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.3.0",children:"release change log"}),", and check out the latest documentation on ",(0,i.jsx)(e.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function u(l={}){const{wrapper:e}={...(0,s.a)(),...l.components};return e?(0,i.jsx)(e,{...l,children:(0,i.jsx)(c,{...l})}):c(l)}},1151:(l,e,t)=>{t.d(e,{Z:()=>o,a:()=>r});var i=t(7294);const s={},h=i.createContext(s);function r(l){const e=i.useContext(h);return i.useMemo((function(){return"function"==typeof l?l(e):{...e,...l}}),[e,l])}function o(l){let e;return e=l.disableParentContext?"function"==typeof l.components?l.components(s):l.components||s:r(l.components),i.createElement(h.Provider,{value:e},l.children)}}}]);