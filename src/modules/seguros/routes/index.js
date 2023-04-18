export default{
    name: '',
    component: () => import(/* webpackChunkName: "Seguros" */ '../layouts/layoutSeguros.vue'),
    children: [
        {
            path: '', 
            name: 'noselect',
            component: () => import(/* webpackChunkName: "HomeSeguros "*/'../views/NoSelectView.vue')   
        },
        {
            path: ':id', 
            name: 'datos',
            component: () => import(/* webpackChunkName: "DatosSeguros "*/'../views/homeView.vue'),   
            props:(route)=>
            {
              return {
                id: route.params.id
              }
            }
        },
    ]
}