


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
                        value:'Inbox',
                        href:pathRoute("/messages"),
                        controller:'inboxMessage'
                    },
                    {
                        value:'Discussions',
                        href:pathRoute("/discussions"),
                        controller:'discussions'
                    }
                ]
            }
        ]
    },
    {
        titre:'Publications',
        icon:"fas fa-bell fa-fw",
        liens:[
            {
                titre:'Journales et notifications:',
                items:[
                    {
                        value:'Tous',
                        href:pathRoute("/publications"),
                        controller:'publications'
                    },
                    {
                        value:'Evenement',
                        href:pathRoute("/evenement"),
                        controller:'evenement'
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
          return reply.template("templates/dashboard.ejs", { user,NAV_ITEMS });
        }
        return reply.redirect("/");
    }
    static async plaintes(request, reply) {
        const user=request.session.get("user")
        if(user){
            return reply.template("templates/indexDashboard.ejs", { 
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
            return reply.template("templates/indexDashboard.ejs", { 
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
    static async inboxMessage(request, reply) {
        const user=request.session.get("user")
        if(user){
            return reply.template("templates/indexDashboard.ejs", { 
                user,
                path:"components/inbox/inbox.ejs",
                NAV_ITEMS,
                navActived:{
                    titre:'Messages',
                    value:'Inbox'
                }
             });
        }
        return reply.redirect('/')
    }
    static async discussions(request, reply) {
        const user=request.session.get("user")
        if(user){
            return reply.template("templates/indexDashboard.ejs", { 
                user,
                path:"components/messages/discussions.ejs",
                NAV_ITEMS,
                navActived:{
                    titre:'Messages',
                    value:'Discussions'
                }
             });
        }
        return reply.redirect('/')
    }
    static async publications(request, reply){
        const user=request.session.get("user")
        if(user){
            return reply.template("templates/indexDashboard.ejs", { 
                ActivePublications:"active",
                user,
                path:"components/pub/tous.ejs",
                NAV_ITEMS,
                navActived:{
                    titre:'Publications',
                    value:'Tous'
                }
             });
        }
        return reply.redirect('/')
    }
}