(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/svg-2.d4846e11.svg"},26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/profile.79ba2002.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/svg-3.397c455a.svg"},40:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(22),r=a.n(l),o=(a(31),a(5)),c=a(3),s=a(2);const m=s.a`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}
*::-webkit-scrollbar {
  width: 0.5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}
`,d=s.b.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`,p=s.b.button`
  border-radius: 4px;
  background: ${({primary:e})=>e?"#4B59F7":"#0467FB"};
  white-space: nowrap;
  padding: ${({big:e})=>e?"12px 64px":"10px 20px"};
  color: #fff;
  font-size: ${({fontBig:e})=>e?"20px":"16px"};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({primary:e})=>e?"#0467FB":"#4B59F7"};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;var u=m,g=a(6);const x=s.b.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`,h=Object(s.b)(d)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${d}
`,b=Object(s.b)(o.b)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`,f=Object(s.b)(g.e)`
    margin-right: 0.5rem;

`,E=s.b.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;   
    }
`,w=s.b.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
  
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease;
        background-color: #101522;
        left: ${({click:e})=>e?0:"-100%"};
    }
`,y=s.b.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    border-radius: 2px;

    &:hover {
        border-bottom: 4px solid #fff;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border-bottom: none;
        }
    }

`,v=Object(s.b)(o.b)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`,S=s.b.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`,k=Object(s.b)(o.b)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;var T=a(0);var L=function(){const[e,t]=Object(n.useState)(!1),[a,l]=Object(n.useState)(!0),[r,o]=Object(n.useState)(!1),[c,s]=Object(n.useState)(!1),[m,d]=Object(n.useState)(!1),u=()=>t(!e),L=()=>t(!1),j=()=>{window.innerwidth<=960?l(!1):l(!0)};return Object(n.useEffect)(()=>{j()},[]),window.addEventListener("resize",j),i.a.createElement(i.a.Fragment,null,i.a.createElement(T.b.Provider,{value:{color:"#fff"}},i.a.createElement(x,null,i.a.createElement(h,null,i.a.createElement(b,{to:"/"},i.a.createElement(f,null),"ULTRA"),i.a.createElement(E,{onClick:u},e?i.a.createElement(g.f,null):i.a.createElement(g.a,null)),i.a.createElement(w,{onClick:u,click:e},i.a.createElement(y,{onClick:()=>{o(!0),d(!1),s(!1)},homeClick:r},i.a.createElement(v,{to:"/",onClick:L},"Home")),i.a.createElement(y,{onClick:()=>{o(!1),d(!1),s(!0)},servicesClick:c},i.a.createElement(v,{to:"/services",onClick:L},"Services")),i.a.createElement(y,{onClick:()=>{o(!1),d(!0),s(!1)},productsClick:m},i.a.createElement(v,{to:"/Products",onClick:L},"Products")),i.a.createElement(S,null,a?i.a.createElement(k,{to:"/sign-up"},i.a.createElement(p,{primary:!0},"SIGN UP")):i.a.createElement(k,{to:"/sign-up"},i.a.createElement(p,{onClick:L,fontBig:!0,primary:!0},"SIGN UP"))))))))};const j=s.b.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,C=s.b.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`,B=s.b.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`,O=s.b.p`
  margin-bottom: 24px;
  font-size: 20px;
`,z=s.b.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`,F=s.b.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`,D=s.b.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`,U=s.b.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,$=s.b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`,P=s.b.h2`
  margin-bottom: 16px;
`,I=Object(s.b)(o.b)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`,A=s.b.section`
  max-width: 1000px;
  width: 100%;
`,G=s.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,V=Object(s.b)(o.b)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`,N=Object(s.b)(g.e)`
  margin-right: 10px;
`,M=s.b.small`
  color: #fff;
  margin-bottom: 16px;
`,Y=s.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

`,J=s.b.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;var R=function(){const e=new Date;return i.a.createElement(j,null,i.a.createElement(C,null,i.a.createElement(B,null,"Join our exclusive membership to receive the latest news and trends"),i.a.createElement(O,null,"You can unsubscribe at any time."),i.a.createElement(z,null,i.a.createElement(F,{name:"email",type:"email",placeholder:"Your Email"}),i.a.createElement(p,{fontBig:!0},"Subscribe"))),i.a.createElement(D,null,i.a.createElement(U,null,i.a.createElement($,null,i.a.createElement(P,null,"About Us"),i.a.createElement(I,{to:"/sign-up"},"How it works"),i.a.createElement(I,{to:"/"},"Testimonials"),i.a.createElement(I,{to:"/"},"Careers"),i.a.createElement(I,{to:"/"},"Investors"),i.a.createElement(I,{to:"/"},"Terms of Service")),i.a.createElement($,null,i.a.createElement(P,null,"Contact Us"),i.a.createElement(I,{to:"/"},"Contact"),i.a.createElement(I,{to:"/"},"Support"),i.a.createElement(I,{to:"/"},"Destinations"),i.a.createElement(I,{to:"/"},"Sponsorships"))),i.a.createElement(U,null,i.a.createElement($,null,i.a.createElement(P,null,"Videos"),i.a.createElement(I,{to:"/"},"Submit Video"),i.a.createElement(I,{to:"/"},"Ambassadors"),i.a.createElement(I,{to:"/"},"Agency"),i.a.createElement(I,{to:"/"},"Influencer")),i.a.createElement($,null,i.a.createElement(P,null,"Social Media"),i.a.createElement(I,{to:"/"},"Instagram"),i.a.createElement(I,{to:"/"},"Facebook"),i.a.createElement(I,{to:"/"},"Youtube"),i.a.createElement(I,{to:"/"},"Twitter")))),i.a.createElement(A,null,i.a.createElement(G,null,i.a.createElement(V,{to:"/"},i.a.createElement(N,null),"ULTRA"),i.a.createElement(M,null,"ULTRA \xa9 ",e.getFullYear()," "),i.a.createElement(Y,null,i.a.createElement(J,{href:"/",target:"_blank","aria-label":"Facebook"},i.a.createElement(g.b,null)),i.a.createElement(J,{href:"/",target:"_blank","aria-label":"Instagram"},i.a.createElement(g.c,null)),i.a.createElement(J,{href:"/",target:"_blank","aria-label":"YouTube"},i.a.createElement(g.h,null)),i.a.createElement(J,{href:"/",target:"_blank","aria-label":"Twitter"},i.a.createElement(g.g,null)),i.a.createElement(J,{href:"/",target:"_blank","aria-label":"LinkedIn"},i.a.createElement(g.d,null))))))};const _=s.b.div`
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg:e})=>e?"#fff":"#101522"};
`,q=s.b.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({imgStart:e})=>e?"row-reverse":"row"};
`,W=s.b.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,H=s.b.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-bottom: 65px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;  
  }
`,K=s.b.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({start:e})=>e?"flex-start":"flex-end"};
`,X=s.b.div`
  color: ${({lightTopLine:e})=>e?"#a9b3c1":"#4B59F7"};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`,Q=s.b.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`,Z=s.b.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText:e})=>e?"#f7f8fa":"#1c2237"};
`,ee=s.b.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightTextDesc:e})=>e?"#a9b3c1":"#1c2237"};
`;var te=({primary:e,lightBg:t,topLine:a,lightTopLine:n,lightText:l,lightTextDesc:r,headline:c,description:s,buttonLabel:m,img:u,alt:g,imgStart:x,start:h})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{lightBg:t},i.a.createElement(d,null,i.a.createElement(q,{imgStart:x},i.a.createElement(W,null,i.a.createElement(H,null,i.a.createElement(X,{lightTopLine:n},a),i.a.createElement(Z,{lightText:l},c),i.a.createElement(ee,{lightTextDesc:r},s),i.a.createElement(o.b,{to:"/sign-up"},i.a.createElement(p,{big:!0,fontBig:!0,primary:e},m)))),i.a.createElement(W,null,i.a.createElement(K,{start:h},i.a.createElement(Q,{src:u,alt:g}))))))),ae=a(12);const ne=s.b.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`,ie=s.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,le=s.b.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`,re=s.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`,oe=Object(s.b)(o.b)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`,ce=s.b.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`,se=s.b.div`
  margin: 24px 0;
`,me=s.b.h3`
  margin-bottom: 5px;
  font-size: 24px;
`,de=s.b.h4`
  font-size: 40px;
`,pe=s.b.p`
  font-size: 14px;
  margin-bottom: 24px;
`,ue=s.b.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`,ge=s.b.li`
  margin-bottom: 10px;
`;var xe=()=>i.a.createElement(T.b.Provider,{value:{color:"#a9b3c1",size:64}},i.a.createElement(ne,null,i.a.createElement(ie,null,i.a.createElement(le,null,"Our Services"),i.a.createElement(re,null,i.a.createElement(oe,{to:"/sign-up"},i.a.createElement(ce,null,i.a.createElement(se,null,i.a.createElement(ae.c,null)),i.a.createElement(me,null,"Starter Pack"),i.a.createElement(de,null,"$99.99"),i.a.createElement(pe,null,"per month"),i.a.createElement(ue,null,i.a.createElement(ge,null,"100 New Users"),i.a.createElement(ge,null,"$10,000 Budget"),i.a.createElement(ge,null,"Retargeting analytics")),i.a.createElement(p,{primary:!0},"Choose Plan"))),i.a.createElement(oe,{to:"/sign-up"},i.a.createElement(ce,null,i.a.createElement(se,null,i.a.createElement(ae.a,null)),i.a.createElement(me,null,"Gold Rush"),i.a.createElement(de,null,"$299.99"),i.a.createElement(pe,null,"per month"),i.a.createElement(ue,null,i.a.createElement(ge,null,"1000 New Users"),i.a.createElement(ge,null,"$50,000 Budget"),i.a.createElement(ge,null,"Lead Gen Analytics")),i.a.createElement(p,{primary:!0},"Choose Plan"))),i.a.createElement(oe,{to:"/sign-up"},i.a.createElement(ce,null,i.a.createElement(se,null,i.a.createElement(ae.b,null)),i.a.createElement(me,null,"Diamond Kings"),i.a.createElement(de,null,"$999.99"),i.a.createElement(pe,null,"per month"),i.a.createElement(ue,null,i.a.createElement(ge,null,"Unlimited Users"),i.a.createElement(ge,null,"Unlimited Budget"),i.a.createElement(ge,null,"24/7 Support")),i.a.createElement(p,{primary:!0},"Choose Plan")))))));const he={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Marketing Agency",headline:"Lead Generation Specialist for Online Businesses",description:"We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.",buttonLabel:"Get Started",imgStart:"",img:a(9),alt:"Credit Card",start:""},be={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Instant Setup",headline:"Extremely quick onboarding process",description:"Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",buttonLabel:"Learn More",imgStart:"",img:a(21),alt:"Vault",start:""},fe={primary:!1,lightBg:!0,lightTopLine:!1,lightText:!1,lightTextDesc:!1,topLine:"Sarah Jeni",headline:"Ultra helped me increase my revenue by over 3X in less than 3 months!",description:"Their team is wonderful! I can't believe I didn't start working with them earlier.",buttonLabel:"View Case Study",imgStart:"start",img:a(38),alt:"Vault",start:"true"},Ee={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Secure Database",headline:"All your data is stored on our secure server",description:"You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.",buttonLabel:"Sign Up Now",imgStart:"start",img:a(39),alt:"Vault",start:"true"};var we=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(te,he),i.a.createElement(te,fe),i.a.createElement(te,be),i.a.createElement(xe,null),i.a.createElement(te,Ee));const ye={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:a(9),alt:"Credit Card"},ve=(a(9),{lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Easy Setup",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:a(9),alt:"Vault"});a(9);var Se=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(xe,null),i.a.createElement(te,ye),i.a.createElement(te,ve))};const ke={lightBg:!1,lightText:!0,lightTopLine:!0,lightTextDesc:!0,topLine:"View Our Products",headline:"Shop through our catalog of products",description:"We provide worldwide shipping to all countries. If there are any issues, just issue a refund and we will process your request",buttonLabel:"Shop Now",imgStart:"",img:a(9),alt:"Credit Card"},Te={lightBg:!0,lightText:!1,lightTopLine:!1,lightTextDesc:!1,topLine:"100% Secure",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"start",img:a(21),alt:"Vault"};a(9),a(9);var Le=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(te,ke),i.a.createElement(te,Te))};const je={lightBg:!0,lightText:!1,lightTopLine:!0,lightTextDesc:!1,topLine:"Sign up Today",headline:"Join today to receive an exclusive offer",description:"Get access to our exclusive diamond king package. Limited quantity available.",buttonLabel:"Sign Up",imgStart:"",img:a(9),alt:"Credit Card"};a(9),a(9),a(9);var Ce=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(te,je))};function Be(){const{pathname:e}=Object(c.f)();return Object(n.useEffect)(()=>{window.scrollTo(0,0)},[e]),null}var Oe=function(){return i.a.createElement(o.a,null,i.a.createElement(u,null),i.a.createElement(Be,null),i.a.createElement(L,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",exact:!0,component:we}),i.a.createElement(c.a,{path:"/services",component:Se}),i.a.createElement(c.a,{path:"/products",component:Le}),i.a.createElement(c.a,{path:"/sign-up",component:Ce})),i.a.createElement(R,null))};var ze=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then(({getCLS:t,getFID:a,getFCP:n,getLCP:i,getTTFB:l})=>{t(e),a(e),n(e),i(e),l(e)})};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Oe,null)),document.getElementById("root")),ze()},9:function(e,t,a){e.exports=a.p+"static/media/svg-1.55cfb481.svg"}},[[26,1,2]]]);
//# sourceMappingURL=main.233e8d75.chunk.js.map