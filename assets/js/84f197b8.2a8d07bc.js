"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6922],{1488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(5893),o=n(1151);const s={title:"Streamline your MLflow Projects with Free Hosted MLflow",description:"A guide to using Databricks Community Edition with integrated managed MLflow",slug:"databricks-ce",date:new Date("2024-01-25T00:00:00.000Z"),categories:"blog",authors:["abe-omorogbe"],tags:["managed mlflow","getting started"]},a=void 0,r={permalink:"/mlflow-website/blog/databricks-ce",source:"@site/blog/2024-01-25-databricks-ce/index.md",title:"Streamline your MLflow Projects with Free Hosted MLflow",description:"A guide to using Databricks Community Edition with integrated managed MLflow",date:"2024-01-25T00:00:00.000Z",formattedDate:"January 25, 2024",tags:[{label:"managed mlflow",permalink:"/mlflow-website/blog/tags/managed-mlflow"},{label:"getting started",permalink:"/mlflow-website/blog/tags/getting-started"}],readingTime:5.27,hasTruncateMarker:!0,authors:[{name:"Abe Omorogbe",title:"Product Manager, ML at Databricks",url:"https://www.linkedin.com/in/abeomor/",imageURL:"https://media.licdn.com/dms/image/D4E03AQG-dAkLO2hx_Q/profile-displayphoto-shrink_400_400/0/1693252025753?e=1711584000&v=beta&t=02Bl1a73vp7Zpt8ZXSK_BRDF6DIZWAx1l8oSgkWNa5g",key:"abe-omorogbe"}],frontMatter:{title:"Streamline your MLflow Projects with Free Hosted MLflow",description:"A guide to using Databricks Community Edition with integrated managed MLflow",slug:"databricks-ce",date:"2024-01-25T00:00:00.000Z",categories:"blog",authors:["abe-omorogbe"],tags:["managed mlflow","getting started"]},unlisted:!1,prevItem:{title:"2023 Year in Review",permalink:"/mlflow-website/blog/MLflow-2023"},nextItem:{title:"MLflow AI Gateway renamed to MLflow Deployments for LLMs",permalink:"/mlflow-website/blog/2023/12/01/ai-gateway-rename"}},l={authorsImageUrls:[void 0]},c=[{value:"Streamline Your ML Projects: Get Started with Hosted MLflow for Free",id:"streamline-your-ml-projects-get-started-with-hosted-mlflow-for-free",level:2},{value:"Benefits of Using Databricks CE for MLflow",id:"benefits-of-using-databricks-ce-for-mlflow",level:3},{value:"Scenario",id:"scenario",level:3},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:3},{value:"1. Creating a Databricks CE Account",id:"1-creating-a-databricks-ce-account",level:4},{value:"2. Installing Dependencies",id:"2-installing-dependencies",level:4},{value:"3. Setting Up Databricks CE Authentication",id:"3-setting-up-databricks-ce-authentication",level:4},{value:"4. Connect to Hosted MLflow and Track Experiments with Databricks CE",id:"4-connect-to-hosted-mlflow-and-track-experiments-with-databricks-ce",level:4},{value:"5. Viewing Your Experiment in Databricks CE",id:"5-viewing-your-experiment-in-databricks-ce",level:4},{value:"6. Run any MLflow tutorial in Databricks CE",id:"6-run-any-mlflow-tutorial-in-databricks-ce",level:4},{value:"Conclusion",id:"conclusion",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Further Reading",id:"further-reading",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",del:"del",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"If you're new to MLflow and want to get started with a fully-managed and completely free deployment of MLflow, this blog will show you how to get started using MLflow in minutes."}),"\n",(0,i.jsx)(t.h2,{id:"streamline-your-ml-projects-get-started-with-hosted-mlflow-for-free",children:"Streamline Your ML Projects: Get Started with Hosted MLflow for Free"}),"\n",(0,i.jsxs)(t.p,{children:["Explore the world of big data and machine learning with ",(0,i.jsx)(t.a,{href:"https://community.cloud.databricks.com/",children:"Databricks Community Edition (CE)"}),", a free, limited",(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-1-1ef65d",id:"user-content-fnref-1-1ef65d","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," version of the Databricks platform.\nIdeal for beginners and those new to Databricks and MLflow, this edition streamlines the learning curve by offering a managed environment. It eliminates the complexity of manually\nsetting up a tracking server. Databricks CE includes hosted MLflow, enabling efficient management and visualization of your MLflow experiments. This makes it a prime choice for\ndeveloping machine learning projects in a user-friendly interface, allowing you to connect from your favorite IDE, notebook environment, or even from within Databricks CE's notebooks."]}),"\n",(0,i.jsx)(t.h3,{id:"benefits-of-using-databricks-ce-for-mlflow",children:"Benefits of Using Databricks CE for MLflow"}),"\n",(0,i.jsx)(t.p,{children:"MLflow is an open-source framework compatible with any platform, yet it offers distinct benefits when used on Databricks (including the Community Edition, CE) compared to other platforms. These advantages include:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Cost-Effective"}),": Free of charge, MLflow on Databricks CE is perfect for educational purposes and small-scale projects."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Simple Setup"}),": Gain access to a fully managed tracking server and user interface from any location. To connect to Databricks CE, just execute ",(0,i.jsx)(t.code,{children:"mlflow.login()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Easy Sharing"}),": In the Databricks ecosystem, sharing your notebooks is straightforward and hassle-free."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Seamless Integration"}),": Databricks CE allows for direct storage and visualization of MLflow experiments, runs, and models."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Scalability"}),": MLflow on Databricks CE provides an easy path to scale your projects. It also integrates seamlessly with a wide range of data tools available on the Databricks platform."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"scenario",children:"Scenario"}),"\n",(0,i.jsxs)(t.p,{children:["In this blog, we will walk through running ML experiments on your local device and tracking them on an ",(0,i.jsx)(t.a,{href:"https://mlflow.org/docs/latest/tracking.html#common-setups",children:"MLflow tracking server hosted on Databricks CE"})]}),"\n",(0,i.jsx)(t.p,{children:"To give you an idea of the options available for running MLflow, the figure below shows what is possible for common setup configurations."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Remote Tracking Server",src:n(1557).Z+"",width:"1582",height:"1010"})}),"\n",(0,i.jsx)(t.p,{children:"For this blog, we're showing #3, using a remote (fully managed) tracking server."}),"\n",(0,i.jsx)(t.h3,{id:"step-by-step-guide",children:"Step-by-Step Guide"}),"\n",(0,i.jsx)(t.h4,{id:"1-creating-a-databricks-ce-account",children:"1. Creating a Databricks CE Account"}),"\n",(0,i.jsxs)(t.p,{children:["If you haven't already, you can ",(0,i.jsx)(t.a,{href:"https://www.databricks.com/try-databricks#account",children:"sign up for a free account"}),". The process is quick, typically taking no more than 3 minutes."]}),"\n",(0,i.jsx)(t.p,{children:"Fill out the signup form and select \u201cGet started with Community Edition.\u201d"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Databricks CE Signup Page",src:n(5362).Z+"",width:"1163",height:"552"})}),"\n",(0,i.jsxs)(t.p,{children:["Once signed up, you'll get information on how to set a password that you can use to login to CE with",(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-2-1ef65d",id:"user-content-fnref-2-1ef65d","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"2-installing-dependencies",children:"2. Installing Dependencies"}),"\n",(0,i.jsx)(t.p,{children:"Before you start, ensure that you have the necessary packages installed. Run the following command in your favorite IDE or notebook from your device:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"%pip install -q mlflow databricks-sdk\n"})}),"\n",(0,i.jsx)(t.h4,{id:"3-setting-up-databricks-ce-authentication",children:"3. Setting Up Databricks CE Authentication"}),"\n",(0,i.jsxs)(t.p,{children:["The main advantage of Databricks Community Edition (CE) is its convenience: it offers an MLflow tracking server without requiring\n",(0,i.jsx)(t.a,{href:"https://mlflow.org/docs/latest/getting-started/logging-first-model/step1-tracking-server.html",children:"local infrastructure setup"}),". You can easily access this server through the\n",(0,i.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.login",children:"mlflow.login()"})," function after creating your CE account, streamlining the process for MLflow experiment tracking."]}),"\n",(0,i.jsxs)(t.p,{children:["To authenticate with Databricks CE, use the ",(0,i.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.login",children:"mlflow.login()"})," function. This will prompt you for:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Databricks Host"}),": ",(0,i.jsx)(t.code,{children:"https://community.cloud.databricks.com/"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Username"}),": Your Databricks CE email address."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Password"}),": Your Databricks CE password."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Upon successful authentication, you will see a confirmation message."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import mlflow\n\nmlflow.login()\n\n# Follow the prompts for authentication\n"})}),"\n",(0,i.jsx)(t.h4,{id:"4-connect-to-hosted-mlflow-and-track-experiments-with-databricks-ce",children:"4. Connect to Hosted MLflow and Track Experiments with Databricks CE"}),"\n",(0,i.jsxs)(t.p,{children:["After you login from your local machine, start an experiment with ",(0,i.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html?highlight=mlflow%20set_experiment#mlflow.set_experiment",children:"mlflow.set_experiment()"})," and log some metrics. For instance:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'mlflow.set_experiment("/Users/\\<email>/check-databricks-ce-connection")\n\nwith mlflow.start_run():\n\n\xa0\xa0\xa0\xa0mlflow.log_metric("foo", 1)\n\n\xa0\xa0\xa0\xa0mlflow.log_metric("bar", 2)\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": The Databricks environment requires you to set experiments with the directory (from root)"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"/Users/{your email address for your account}/{name of your experiment}"}),", which is different from the behavior in self-hosted MLflow (and when running MLFlow locally)."]}),"\n",(0,i.jsx)(t.h4,{id:"5-viewing-your-experiment-in-databricks-ce",children:"5. Viewing Your Experiment in Databricks CE"}),"\n",(0,i.jsxs)(t.p,{children:["Now let\u2019s navigate to Databricks CE to view the experiment result. Log in to your ",(0,i.jsx)(t.a,{href:"https://community.cloud.databricks.com/",children:"Databricks CE"}),"\naccount, and click on the top left to select machine learning in the drop down list. Finally, click on the experiment icon. See the screenshots below:"]}),"\n",(0,i.jsx)(t.p,{children:"Navigate to the Machine Learning Section"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Navigate to ML Section of Databricks CE",src:n(733).Z+"",width:"1185",height:"678"})}),"\n",(0,i.jsx)(t.p,{children:"Navigate to the MLflow UI"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Navigate to the MLflow UI on Databricks CE",src:n(5760).Z+"",width:"1288",height:"1009"})}),"\n",(0,i.jsxs)(t.p,{children:["In the \u201cExperiments\u201d view, you should be able to find the experiment ",(0,i.jsx)(t.code,{children:"/Users/{your email}/check-databricks-ce-connection"}),", similar to:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Experiment view of Databricks MLflow server",src:n(9667).Z+"",width:"1600",height:"469"})}),"\n",(0,i.jsx)(t.p,{children:"Clicking on the run name, which in this example is 'youthful-lamb-287' (note that you will see a different, randomly generated name in your CE console),\nwill take you to the run view that looks similar to the following:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Run view of Databricks MLflow server",src:n(6994).Z+"",width:"1600",height:"570"})}),"\n",(0,i.jsxs)(t.p,{children:["In the run view, you will see our dummy metrics ",(0,i.jsx)(t.code,{children:"\u201cfoo\u201d"})," and ",(0,i.jsx)(t.code,{children:"\u201cbar\u201d"})," have been logged successfully."]}),"\n",(0,i.jsx)(t.h4,{id:"6-run-any-mlflow-tutorial-in-databricks-ce",children:"6. Run any MLflow tutorial in Databricks CE"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to try a tutorial from the MLflow website, you can use Databricks CE to quickly test (and modify, if you're inclined) the tutorial. For example, if you wanted to test\nthe ",(0,i.jsx)(t.a,{href:"https://mlflow.org/docs/latest/traditional-ml/creating-custom-pyfunc/notebooks/basic-pyfunc.html",children:"Creating Custom Pyfunc tutorial"}),":"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Click Workspace and\xa0 select \u201cImport notebook\u201d"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Import a Notebook",src:n(1996).Z+"",width:"1196",height:"674"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"URL"})," option to import the notebook directly from the MLflow documentation website. For this example, to import, replace the last element of the url\nfrom ",(0,i.jsx)(t.code,{children:"html"})," to ",(0,i.jsx)(t.code,{children:"ipynb"}),". This can be done with any of the tutorial or guide notebooks that are hosted on the MLflow website."]}),"\n",(0,i.jsxs)(t.p,{children:[".../notebooks/basic-pyfunc.",(0,i.jsx)(t.del,{children:"html"})," \u2192 .../notebooks/basic-pyfunc.",(0,i.jsx)(t.strong,{children:"ipynb"}),(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-3-1ef65d",id:"user-content-fnref-3-1ef65d","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Select the Notebook for Importing",src:n(5066).Z+"",width:"1519",height:"1174"})}),"\n",(0,i.jsx)(t.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"Databricks Community Edition (CE) offers an accessible and collaborative platform for MLflow experiment tracking, presenting several advantages. Its setup process is effortless\nand quick, providing a user-friendly experience. Additionally, it's free to use, making it an ideal choice for beginners, learners, and small-scale projects."}),"\n",(0,i.jsx)(t.h3,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(t.p,{children:["Try out the notebook on ",(0,i.jsx)(t.a,{href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/2830662238121329/3266358972198675/8538262732615206/latest.html",children:"Databricks"})]}),"\n",(0,i.jsx)(t.h3,{id:"further-reading",children:"Further Reading"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Learn more about ",(0,i.jsx)(t.a,{href:"https://mlflow.org/docs/latest/getting-started/tracking-server-overview/index.html#minute-tracking-server-overv",children:"different methods to setup your tracking server"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Learn more about running ",(0,i.jsx)(t.a,{href:"https://mlflow.org/docs/latest/getting-started/running-notebooks/index.html",children:"Tutorial Notebooks "}),"with Databricks CE"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{id:"user-content-fn-1-1ef65d",children:["\n",(0,i.jsxs)(t.p,{children:["The Model Registry and Model Deployment features are not available in the Databricks Community Edition. ",(0,i.jsx)(t.a,{href:"#user-content-fnref-1-1ef65d","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{id:"user-content-fn-2-1ef65d",children:["\n",(0,i.jsxs)(t.p,{children:["Databricks CE only supports basic authorization signin (username / password). For more advanced and secure authorization setups, only the full Databricks product supports those. ",(0,i.jsx)(t.a,{href:"#user-content-fnref-2-1ef65d","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{id:"user-content-fn-3-1ef65d",children:["\n",(0,i.jsxs)(t.p,{children:["Or you can ",(0,i.jsx)(t.a,{href:"https://mlflow.org/docs/latest/traditional-ml/creating-custom-pyfunc/notebooks/basic-pyfunc.ipynb",children:"download the notebook"})," and manually load it in the UI by selecting ",(0,i.jsx)(t.code,{children:"File"})," instead of ",(0,i.jsx)(t.code,{children:"URL"}),". ",(0,i.jsx)(t.a,{href:"#user-content-fnref-3-1ef65d","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5362:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ce-signup-8d3a74af80d917b0ab1d514d2b36d601.png"},5066:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/import-notebook-2-589a74ce4c982cb92c494ab404814618.png"},1996:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/import-notebook-548588052cf7a796bdb1924c3727a578.png"},733:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/navigate-to-experiments-43a3dba9c34a69026e401602f9b5eea7.png"},5760:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/navigate-to-mlflow-ui-9153eefcaed934e7b4eb23ee237a47e7.png"},1557:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/remote-tracking-server-7954737febd0bc4d6d0d209cc78aec6a.png"},9667:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/view-experiment-7dc9705edc70510de92018420a83fbc1.png"},6994:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/view-run-558bde39743ec2b9babdc6f03b81d70f.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(7294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);