(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),c=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(m,s(s({ref:t},i),{},{components:n})):o.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(126)),l={sidebar_position:2},s={unversionedId:"tutorial-extras/deploy-server",id:"tutorial-extras/deploy-server",isDocsHomePage:!1,title:"[ADVANCED] Serving Doodler as a web application for others to use",description:"(page under construction)",source:"@site/docs/tutorial-extras/deploy-server.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/deploy-server",permalink:"/dash_doodler/docs/tutorial-extras/deploy-server",editUrl:"https://github.com/dbuscombe-usgs/dash_doodler/edit/master/website/docs/tutorial-extras/deploy-server.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[ADVANCED] How Doodler works",permalink:"/dash_doodler/docs/tutorial-extras/how-doodler-works"},next:{title:"[ADVANCED] How to contribute",permalink:"/dash_doodler/docs/tutorial-extras/how-to-contribute"}},d=[{value:"Setting up the droplet",id:"setting-up-the-droplet",children:[]},{value:"Setting up newuser, firewalls, and installing anaconda",id:"setting-up-newuser-firewalls-and-installing-anaconda",children:[]},{value:"Downloading doodler code, setting up conda env",id:"downloading-doodler-code-setting-up-conda-env",children:[]},{value:"Test locally",id:"test-locally",children:[]},{value:"Setting up your web server, SSL and custom URL redirects",id:"setting-up-your-web-server-ssl-and-custom-url-redirects",children:[]},{value:"Setting up Doodler as a background service",id:"setting-up-doodler-as-a-background-service",children:[]},{value:"Setting $URL redirect",id:"setting-url-redirect",children:[]}],i={toc:d};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"(page under construction)"),Object(a.b)("p",null,"These instructions assume you are using Ubuntu 20.04 (LTS) x64 on a Digital Ocean Droplet Virtual Machine (VM). You would need to adapt them to a different platform or OS"),Object(a.b)("h3",{id:"setting-up-the-droplet"},"Setting up the droplet"),Object(a.b)("p",null,"Below, you custom URL is called ",Object(a.b)("inlineCode",{parentName:"p"},"$URL")," and your IP address is written as ",Object(a.b)("inlineCode",{parentName:"p"},"$IP")," instead your actual IP address, XXX.XX.XXX.XXX"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Under Networkin/Domains, add your ",Object(a.b)("inlineCode",{parentName:"li"},"$URL")," and www.",Object(a.b)("inlineCode",{parentName:"li"},"$URL")," as separate domains, and redirect both of them to ",Object(a.b)("inlineCode",{parentName:"li"},"$IP")),Object(a.b)("li",{parentName:"ol"},"For each domain, you should have DNS records for 3 nameservers, ns1.digitalocean.com, ns2.digitalocean.com., and n3.digitalocean.com."),Object(a.b)("li",{parentName:"ol"},"Those same nameservers should be linked as custom nameservers with your domain name provider (I used namecheap.com)")),Object(a.b)("h3",{id:"setting-up-newuser-firewalls-and-installing-anaconda"},"Setting up newuser, firewalls, and installing anaconda"),Object(a.b)("p",null,"Below, the new user is called ",Object(a.b)("inlineCode",{parentName:"p"},"newuser"),", but you'd probably want to use something more suited to you, the sysadmin"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ssh root@$IP\nsudo adduser newuser\nusermod -aG sudo newuser\nufw allow OpenSSH\nufw enable\nexit\n")),Object(a.b)("p",null,"Log in as ",Object(a.b)("inlineCode",{parentName:"p"},"newuser"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ssh newuser@$IP\n")),Object(a.b)("p",null,"Install Anaconda3"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"wget https://repo.anaconda.com/archive/Anaconda3-2019.03-Linux-x86_64.sh\nbash Anaconda3-2019.03-Linux-x86_64.sh\n")),Object(a.b)("p",null,"Allow some ports and other tings on the firewall, ufw"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo ufw allow 8050\nsudo ufw allow ssh\nsudo ufw allow http\nsudo ufw allow https\n")),Object(a.b)("h3",{id:"downloading-doodler-code-setting-up-conda-env"},"Downloading doodler code, setting up conda env"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"git clone --depth 1 https://github.com/dbuscombe-usgs/dash_doodler.git\ncd dash_doodler\nconda env create --file install/dashdoodler.yml\nconda activate dashdoodler\nconda install gunicorn\n")),Object(a.b)("h3",{id:"test-locally"},"Test locally"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"conda deactivate\n")),Object(a.b)("p",null,"Run this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"/home/newuser/anaconda3/envs/dashdoodler/bin/gunicorn --bind 0.0.0.0:8050 --timeout 600 doodler:server\n")),Object(a.b)("p",null,"And open a web browser and go here:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http://$IP:8050\n")),Object(a.b)("p",null,"You should see the Doodler app"),Object(a.b)("h3",{id:"setting-up-your-web-server-ssl-and-custom-url-redirects"},"Setting up your web server, SSL and custom URL redirects"),Object(a.b)("p",null,"Install nginx (for web serving) and certbot (for ssl)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo apt install nginx\nsudo apt-get install python3-certbot-nginx\n")),Object(a.b)("p",null,"Test getting your SSL certs in dry run mode"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo certbot --nginx -d $URL -d www.$URL certonly --dry-run\n")),Object(a.b)("p",null,"Assuming that completed without error, run for real:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo certbot --nginx -d $URL -d www.$URL\n")),Object(a.b)("p",null,'See the certificate here: "',Object(a.b)("a",{parentName:"p",href:"https://www.ssllabs.com/ssltest/analyze.html?d=$URL&latest%22"},'https://www.ssllabs.com/ssltest/analyze.html?d=$URL&latest"')),Object(a.b)("h3",{id:"setting-up-doodler-as-a-background-service"},"Setting up Doodler as a background service"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo nano /etc/systemd/system/doodler.service\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'[Unit]\nDescription=Gunicorn instance to serve myproject\nAfter=network.target\n\n[Service]\nUser=newuser\nGroup=www-data\n\nWorkingDirectory=/home/newuser/dash_doodler\nEnvironment="PATH=/home/newuser/anaconda3/envs/dashdoodler/bin"\nExecStart=/home/newuser/anaconda3/envs/dashdoodler/bin/gunicorn --workers 3 --bind unix:/home/newuser/dash_doodler/doodler.sock -m 007 --bind 0.0.0.0:8050 --timeout 600 doodler:server\n\n[Install]\nWantedBy=multi-user.target\n')),Object(a.b)("p",null,"Then run these commands"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo systemctl stop doodler\n\nsudo systemctl daemon-reload\n\nsudo systemctl start doodler\n\nsudo systemctl enable doodler\n\nsudo systemctl status doodler\n")),Object(a.b)("p",null,"open a web browser and go here:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http://$IP:8050\n")),Object(a.b)("p",null,"And you should see Doodler. The service works. This should work on reboot, and in the background. Check on it any time using"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo systemctl status doodler\n")),Object(a.b)("h3",{id:"setting-url-redirect"},"Setting $URL redirect"),Object(a.b)("p",null,"However, I couldn't get doodler to appear at my ",Object(a.b)("inlineCode",{parentName:"p"},"$URL")," unless I also edited this file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo nano /etc/nginx/sites-available/default\n")),Object(a.b)("p",null,"Like this (replacing ",Object(a.b)("inlineCode",{parentName:"p"},"$URL")," with whatever it is):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"        # Add index.php to the list if you are using PHP\n        index index.html index.htm index.nginx-debian.html;\n\n        server_name $URL www.$URL;\n\n        location / {\n                # First attempt to serve request as file, then\n                # as directory, then fall back to displaying a 404.\n                #try_files $uri $uri/ =404;\n    location / {\n        proxy_pass http://0.0.0.0:8050; #whatever port your app runs on\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n        }\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo nano /etc/nginx/sites-available/doodler\n")),Object(a.b)("p",null,"Should look like this (replacing ",Object(a.b)("inlineCode",{parentName:"p"},"$URL")," with whatever it is):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"server {\n    server_name  $URL www. $URL;\n\n    location / {\n        include proxy_params;\n        proxy_pass http://unix:/home/newuser/doodler/doodler.sock;\n    }\n\n    listen 443 ssl; # managed by Certbot\n    ssl_certificate /etc/letsencrypt/live/ $URL/fullchain.pem; # managed by Certbot\n    ssl_certificate_key /etc/letsencrypt/live/ $URL/privkey.pem; # managed by Certbot\n    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot\n    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot\n\n\n}\n\nserver {\n    if ($host =  $URL) {\n        return 301 https://$host$request_uri;\n    } # managed by Certbot\n\n\n    if ($host =  $URL) {\n        return 301 https://$host$request_uri;\n    } # managed by Certbot\n\n\n    listen 80;\n    server_name $URL www.$URL;\n    return 404; # managed by Certbot\n\n\n}\n\n")),Object(a.b)("p",null,"Then symlink"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo ln -s /etc/nginx/sites-available/doodler /etc/nginx/sites-enabled\n")),Object(a.b)("p",null,"Test the config files"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo nginx -t\n")),Object(a.b)("p",null,'I got "nginx: ',"[warn]",' conflicting server name" warnings because of the two nginx enabled sites pointing to the same place'),Object(a.b)("p",null,"Restart nginx and update the firewall"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo systemctl restart nginx\nsudo ufw allow 'Nginx Full'\n")),Object(a.b)("p",null,"ow your doodler service will be running the app at"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http://$IP:8050\n")),Object(a.b)("p",null,"which redirects to"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http://$URL\n")),Object(a.b)("p",null,"But, despite the SSL cert from certbot, for some unknown reason it does not appear at"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"https://$URL\n")),Object(a.b)("p",null,"as expected"),Object(a.b)("p",null,"any thoughts? Get in touch!"),Object(a.b)("p",null,"I carried out this process and have a site hosted ",Object(a.b)("a",{parentName:"p",href:"http://doodler.xyz/"},"here")))}c.isMDXComponent=!0}}]);