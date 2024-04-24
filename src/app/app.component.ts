import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nodes: any = [
    {
      title: 'GERENTE COMERCIAL SUPPLY CHAIN',
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: 'assets/node.svg',
      color: '#EC206B',
      details: [{ id: 1, description: '' }],
      link: "https://www.example.com",
      // heightFactor: 3,
      children: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'INGENIERO SENIOR DE ABASTECIMIENTO',
          details: [{ id: 1, description: '' }],
          heightFactor: 2
        },
        {
          name: 'ILIANA CARPETRES',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'ASISTENTE',
          details: [{ id: 1, description: '' }],
          heightFactor: 3
        },
        // {
        //   name: 'Wachu Wa',
        //   cssClass: 'ngx-org-ceo',
        //   image: 'assets/node.svg',
        //   title: 'SUPERINTENDENTE DE COMPRAS',
        //   details: [{ id: 1, description: '' }],
        //   heightFactor: 1
        // },
        // {
        //   name: 'Phuntsok Moana',
        //   cssClass: 'ngx-org-ceo',
        //   image: 'assets/node.svg',
        //   title: 'GERENTE OPERATIVO SUPPLY CHAIN',
        //   details: [{ id: 1, description: '' }],
        //   heightFactor: 0
        // },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'GERENTE CONTRATOS',
          details: [{ id: 1, description: '' }],
          heightFactor: 0,
          children: [
            {
              name: 'BENJAMÍN CARPETRES',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'ASISTENTE',
              details: [{ id: 1, description: '' }],
              heightFactor: 2
            },
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: 'INGENIERO DE CONTRATOS TIPO A',
              details: [{ id: 1, description: '' }],
              heightFactor: 1,
              children: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'SUPERINTENDENTE DE ABASTECIMIENTO',
              details: [{ id: 1, description: '' }],
              heightFactor: 0,
              children: [
                {
                  name: 'SANTIAGO CARPETRES',
                  cssClass: 'ngx-org-ceo',
                  image: 'assets/node.svg',
                  title: 'ASISTENTE',
                  details: [{ id: 1, description: '' }],
                  heightFactor: 1
                },
                {
                  name: 'Macarena Sáez',
                  cssClass: 'ngx-org-head',
                  image: 'assets/node.svg',
                  title: 'INGENIERO DE CONTRATOS TIPO B',
                  details: [{ id: 1, description: '' }],
                  heightFactor: 0,
                  children: [
                    {
                      name: 'JORGE CARPETRES',
                      cssClass: 'ngx-org-ceo',
                      image: 'assets/node.svg',
                      title: 'ASISTENTE JUNIOR',
                      details: [{ id: 1, description: '' }],
                      heightFactor: 0
                    },
                  ]
                },
              ]
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'SUPERINTENDENTE DE ABASTECIMIENTO',
              details: [{ id: 1, description: '' }],
              heightFactor: 0,
              children: []
            }
          ]
        },
      ]
    }
  ];
  

  testDetail(event: any) {
    console.log("It works!", event);
  }

  testExtLink(event) {
    console.log("It works!", event);
  }
}
