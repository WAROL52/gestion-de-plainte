


const pathRoute=(path="")=>"/dashboard"+path


export const NAV_ITEMS=[
    {
        titre:'plaintes',
        icon:"fas fa-w fa-gavel",
        liens:[
            {
                titre:'Custom Components:',
                items:[
                    {
                        value:'Liste des plaintes',
                        href:pathRoute("/plaintes"),
                        controller:'plaintes',
                    }
                ]
            }
        ]
    },
    {
        titre:'Utilisateurs',
        icon:"fas fa-w fa-user",
        liens:[
            {
                titre:'Listes des membres:',
                items:[
                    {
                        value:'membre de comité',
                        href:pathRoute("/membre-de-comite"),
                        controller:'membreDeComite',
                    },
                    {
                        value:'En attente',
                        href:pathRoute("/membre-de-comite/en-attente"),
                        controller:'EnAttente',
                    },
                ]
            }
        ]
    },
    {
        titre:'Messages',
        icon:"fas fa-envelope fa-fw",
        liens:[
            {
                titre:'listes des messages:',
                items:[
                    {
                        value:'Tous les messages',
                        href:pathRoute("/messages"),
                        controller:'messages'
                    },
                    {
                        value:'Messages lus',
                        href:pathRoute("/messages-lus"),
                        controller:'messagesLus'
                    },
                    {
                        value:'Messages non lus',
                        href:pathRoute("/messages-non-lus"),
                        controller:'messagesNonLus'
                    },
                ]
            }
        ]
    },
    {
        titre:'Journal',
        icon:"fas fa-bell fa-fw",
        liens:[
            {
                titre:'Journales et notifications:',
                items:[
                    {
                        value:'historiques',
                        href:pathRoute("/historiques"),
                        controller:'historiques'
                    },
                    {
                        value:'Journal',
                        href:pathRoute("/journal"),
                        controller:'journal'
                    },
                    {
                        value:'notifications',
                        href:pathRoute("/notifications"),
                        controller:'notifications'
                    }
                ]
            }
        ]
    },
    {
        titre:'Importations',
        icon:"fas fa-bell fa-fw",
        liens:[
            {
                titre:'Custom Utilities:',
                items:[
                    {
                        value:'Colors',
                        href:pathRoute("/Colors"),
                        controller:'Colors'
                    },
                    {
                        value:'Borders',
                        href:pathRoute("/Borders"),
                        controller:'Borders'
                    },
                    {
                        value:'Animations',
                        href:pathRoute("/Animations"),
                        controller:'Animations'
                    },
                    {
                        value:'Other',
                        href:pathRoute("/Other"),
                        controller:'Other'
                    },
                ]
            }
        ]
    },
]
export class Dashboard {
    static async index(request, reply) {
        const user = request.session.get("user");
        if (user) {
          return reply.view("templates/dashboard.ejs", { user,NAV_ITEMS });
        }
        return reply.redirect("/");
    }
    static async plaintes(request, reply) {
        const user=request.session.get("user")
        if(user){
            return reply.view("templates/indexDashboard.ejs", { 
                user,
                path:"dashboardContent/plaintes.ejs",
                NAV_ITEMS,
                navActived:{
                    titre:'plaintes',
                    value:'Liste des plaintes'
                }
             });
        }
        return reply.redirect('/')
    }
    static async membreDeComite(request, reply) {
        const user=request.session.get("user")
        if(user){
            return reply.view("templates/indexDashboard.ejs", { 
                user,
                path:"dashboardContent/membreDeComite.ejs",
                NAV_ITEMS,
                navActived:{
                    titre:'Utilisateurs',
                    value:'membre de comité'
                }
             });
        }
        return reply.redirect('/')
    }
}