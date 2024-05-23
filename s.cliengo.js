
window.Cliengo = {}; //all Cliengo configs, functions and params goes into this object

window.Cliengo.chatConfig = {
  "companyId" : "5d8e5d7fe4b05042ce8ad2c2",
  "websiteId" : "5ddc677ce4b0234796dc9188",
  "whiteLabelId" : "55df4ed3e4b0337744bcd65a",
  "whiteLabelName" : "",
  "googleAdWordsConversionId" : "",
  "googleAnalyticsId" : "",
  "chatbotName" : "Lumi",

    "phone" : "",
  "title": "Contacto  Landing Lumicenter",
  "businessHoursConfiguration" : {"enabled_channels":{"CHATBOT":false,"WHATSAPP":false},"business_hours":[{"start":32400,"end":50400},{"start":54000,"end":64800},{"start":118800,"end":136800},{"start":140400,"end":151200},{"start":205200,"end":223200},{"start":226800,"end":237600},{"start":291600,"end":309600},{"start":313200,"end":324000},{"start":378000,"end":396000},{"start":399600,"end":410400}],"initial_message":"\u003cp class\u003d\"editor-paragraph\"\u003e\u003cspan\u003eHola, gracias por contactarnos ! \n\nPor favor, déjanos tu requerimiento.\u003c/span\u003e\u003cbr\u003e\u003cspan\u003eTe estaremos contactando dentro de nuestro horario de atención:\n  ✅ Lunes - viernes \u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"editor-paragraph\"\u003e\u003cspan\u003e🕓9.00 a.m. a 2.00 p.m. \u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"editor-paragraph\"\u003e\u003cspan\u003e🕓3.00 p.m. a 6.00 p.m.\u003c/span\u003e\u003cbr\u003e\u003c/p\u003e","time_zone":"-5:00","promise_future_contact":"Muchas gracias. Un asesor se comunicará contigo a la brevedad con la información que me has pasado.","final_salutation":"Bien, me contacto con el asesor y le doy toda esta información. Muchas gracias nuevamente  por comunicarte!"},
  "conversionPixels" : "",
  "customFeedbackImageUrl" : "",
  "widgetIcon" : "TWO_CHATS",
   "widgetStyle" : "ICON",
  "chatWindowColor" : "#fae400",
  "cliengoMeetings" : "false",
  "chatWindowTitle" : "Lumicenter",
  "chatWindowInputPlaceholder" : "Escribe un mensaje...",
  "chatInitialMessage" : "<p class=\"editor-paragraph\"><span>Hola! Gracias por contactarnos. \nCómo te podemos ayudar? 👉 selecciona una opción:<\/span><\/p>[[.Tengo un Proyecto, .Necesito asesoría, .Busco un producto, .Quiero Visitarlos, .Quiero ser distribuidor, .Otra necesidad]]",
  "chatIsWritingMessage" : " está escribiendo...",
  "chatSaluteTimeInSeconds" : 4,
  "avatarImgUrl": "https://res.cloudinary.com/hbrrdozyj/image/upload/w_35,f_auto,q_auto/v1575308255/cliengo_chatbot_avatar/qlptw0onfnsvkkzhbzad.jpg",
  "labs":{
      },
  "companyLabs": "powered_by_popup,crmsource,cvanalysis,advanced_conversation,reports_beta,just_bubble,gads_configuration_2023,conversation_plans,conversation_plans",
  "planType": "CLIENGO_PREMIUM_CONVER",
  "vertical": "INDUSTRIAL",
    "formHooksEnabled" : false,
  "automaticRemarketingEnabled" : true,
  "chatEnabled" : true,
        "poweredBy":{
          "text": "Usamos Cliengo ",
          "link": "https://www.cliengo.com/?utm_source=usamos_cliengo&utm_medium=chat",
          "img":  "https://res.cloudinary.com/hbrrdozyj/image/upload/v1603736815/Usamos-Cliengo_knac91.png"
      },
    "customPoweredByUtms": "",
  "softDisable": false,
  "hasConvertedLead" : false,   "CDN_URL_DOMAIN" : "//d47r8x2gwo1do.cloudfront.net",
        "WS_CHATBOT_URL" : "wss://chatbot.cliengo.com",
      "sessionPath" : "/s/5d8e5d7fe4b05042ce8ad2c2/5ddc677ce4b0234796dc9188",
  "cacheVersion" : "1438-07062065",
  "debug" : false,
  "whatsAppActive": true,
  "lang" : "es",
  "widgetVersion" : "2.0",
  "type": "EXTERNAL",
  "redirectToWPLite": false
}


var host = 'https://lw.cliengo.com';

var mainClgoScriptId = 'mainclgo';
var mainWspScriptId = 'mainWsp';
var mainclgoScriptExists = document.querySelector('script[id="' + mainClgoScriptId + '"]');

loadMain();

function loadMain() {
  if(mainclgoScriptExists) {
    console.warn('Cuidado! ya existe un script con id "' + mainClgoScriptId + '", ' +
      'probablemente el script del chat este duplicado en ese sitio!');
    return;
  }

  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.id = mainClgoScriptId;
  s.src = host + '/mainclgo.bundle.js';
  s.setAttribute('data-company-id', '5d8e5d7fe4b05042ce8ad2c2');
  s.setAttribute('data-source-id', '5ddc677ce4b0234796dc9188');
  s.setAttribute('data-host', host);
  s.async = true;
  document.body.appendChild(s);
  console.debug('clgo loaded');

  loadWhatsAppWidget();
}

function onCommonsLoad() {
  console.log(commonsClgoScriptId + ' script loaded successfuly.');
  loadMain();
}

// WhatsApp functions
function setwhatsappConfig() {
      window.ldkWSP = {};
    ldkWSP.widget_color = "#00bfa5";
    ldkWSP.widget_message = "WhatsApp";
    ldkWSP.conversionPixelHtml = "";
    ldkWSP.position = "";
    ldkWSP.phone = "+51981333072";
    ldkWSP.desktop_version = "EXTENDED";
    ldkWSP.lang = "es";
    ldkWSP.businessHoursConfiguration = {"enabled_channels":{"CHATBOT":true,"WHATSAPP":false},"business_hours":[{"start":32400,"end":50400},{"start":54000,"end":64800},{"start":118800,"end":136800},{"start":140400,"end":151200},{"start":205200,"end":223200},{"start":226800,"end":237600},{"start":291600,"end":309600},{"start":313200,"end":324000},{"start":378000,"end":396000},{"start":399600,"end":410400}],"initial_message":"\u003cp class\u003d\"editor-paragraph\"\u003e\u003cspan\u003eHola, gracias por contactarnos ! \n\nPor favor, déjanos tu requerimiento.\u003c/span\u003e\u003cbr\u003e\u003cspan\u003eTe estaremos contactando dentro de nuestro horario de atención:\n  ✅ Lunes - viernes \u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"editor-paragraph\"\u003e\u003cspan\u003e🕓9.00 a.m. a 2.00 p.m. \u003c/span\u003e\u003c/p\u003e\u003cp class\u003d\"editor-paragraph\"\u003e\u003cspan\u003e🕓3.00 p.m. a 6.00 p.m.\u003c/span\u003e\u003cbr\u003e\u003c/p\u003e","time_zone":"-5:00","promise_future_contact":"Muchas gracias. Un asesor se comunicará contigo a la brevedad con la información que me has pasado.","final_salutation":"Bien, me contacto con el asesor y le doy toda esta información. Muchas gracias nuevamente  por comunicarte!"},
    ldkWSP.company_id = "5d8e5d7fe4b05042ce8ad2c2";
    ldkWSP.website_id = "5ddc677ce4b0234796dc9188";
    ldkWSP.disable_powered_by = "" === "true";
    ldkWSP.custom_powered_by_utms = "";
    ldkWSP.googleAnalyticsId = "";
    ldkWSP.plan_type = "CLIENGO_PREMIUM_CONVER";
    ldkWSP.type = "EXTERNAL";
    ldkWSP.redirectToWPLite = false;
    ldkWSP.website_id = "5ddc677ce4b0234796dc9188";
    ldkWSP.show_desktop = true;
    ldkWSP.show_mobile = true;
    ldkWSP.labs = {
          };
    ldkWSP.notice = {
    "title": "Te comunicaremos con nuestros asesores ",
    "type": "text"
};
    ldkWSP.name_request_message = {
    "title": "Nombre",
    "type": "text"
};
    ldkWSP.whats_app_request_message = {
    "title": "N\u00ba de WhatsApp",
    "type": "text"
};
    ldkWSP.message_request_message = {
    "title": "Elige una opci\u00f3n para ayudarte",
    "type": "select",
    "options": [
        "Busco asesor\u00eda",
        "Tengo un Proyecto ",
        "Busco info de un producto",
        "Otra necesidad"
    ]
};
    ldkWSP.requestMessages = [
    {
        "title": "Elige una opci\u00f3n para ayudarte",
        "type": "select",
        "options": [
            "Busco asesor\u00eda",
            "Tengo un Proyecto ",
            "Busco info de un producto",
            "Otra necesidad"
        ]
    }
];

    ldkWSP.snippetsCampaigns = [];
  }

function loadWhatsAppWidget() {
      setwhatsappConfig();
    var wspHost = 'https://wb.cliengo.com';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.id = mainWspScriptId;
    s.src = wspHost + '/dist/js/mainWsp.js';
    s.setAttribute('data-company-id', '5d8e5d7fe4b05042ce8ad2c2');
    s.setAttribute('data-source-id', '5ddc677ce4b0234796dc9188');
    s.setAttribute('data-host', wspHost);
    s.async = true;
    document.body.appendChild(s);
  }

