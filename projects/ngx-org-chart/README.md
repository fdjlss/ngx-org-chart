# @fdjlss/ngx-org-chart

Based off of mumincelal's original [ngx-org-chart](https://www.npmjs.com/package/ngx-org-chart).\
README incomplete beyond this point. Some features may be broken, missing, or left undocumented.

---

The `ngx-org-chart` creates hierarchical organization chart.
You can create hierarchical organization charts with it.

It applies multiple root node. That means you can create multiple organization charts at the same time.

![Org Chart](https://raw.githubusercontent.com/mumincelal/ngx-org-ui/master/projects/ngx-org-chart/organization-chart-horizontal.png)
![Org Chart](https://raw.githubusercontent.com/mumincelal/ngx-org-ui/master/projects/ngx-org-chart/organization-chart-vertical.png)

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Inputs](#inputs)

## Installation

You can install the package using following command.

```sh
$ npm install @fdjlss/ngx-org-chart
```

Import below file into style.scss file.

```scss
@import '../node_modules/@fdjlss/ngx-org-chart/theming';
```

## Usage

|Property|Type|Description
|---|---|---
|name|`string`|Name of the node
|cssClass|`string`|Custom css class for the node
|image|`string`|Image of the node
|title|`string`|The node's title
|children|`Node[]`|The array of child nodes

### `app.module.ts`
```js
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxOrgChartModule } from 'ngx-org-chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxOrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### `app.component.html`
```html
<ngx-org-chart [nodes]="nodes" direction="vertical" (itemClick)="test($event)"></ngx-org-chart>
```

### `app.component.ts`
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nodes: any = [
    {
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: '',
      title: 'Chief Executive Officer',
      children: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'CEO, YouTube',
          children: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: 'Global Head of Business Operations',
              children: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'VP, Agency and Brand Solutions',
              children: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'VP, Product Management',
              children: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Head of Artificial Intelligence',
          children: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'CEO, Google Health',
              children: []
            }
          ]
        }
      ]
    },
    {
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: 'assets/node.svg',
      title: 'Chief Executive Officer',
      children: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'CEO, YouTube',
          children: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: 'Global Head of Business Operations',
              children: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'VP, Agency and Brand Solutions',
              children: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'VP, Product Management',
              children: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Head of Artificial Intelligence',
          children: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'CEO, Google Health',
              children: []
            }
          ]
        }
      ]
    },
    {
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: 'assets/node.svg',
      title: 'Chief Executive Officer',
      children: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'CEO, YouTube',
          children: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: 'Global Head of Business Operations',
              children: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'VP, Agency and Brand Solutions',
              children: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'VP, Product Management',
              children: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Head of Artificial Intelligence',
          children: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'CEO, Google Health',
              children: []
            }
          ]
        }
      ]
    }
  ];
}
```
## Inputs

|Name|Type|Description
|---|---|---|
|`nodes`|`Node` object|The `Node` object that contains node info mentioned above
|`direction`|`vertical` or `horizontal`| Direction mode of the chart
