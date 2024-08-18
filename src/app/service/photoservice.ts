import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: 'https://aaeglass.com/cdn/shop/articles/whichpaintblog_1800x755_crop_center.png?v=1683649124',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://crehana-blog.imgix.net/media/filer_public/d6/0e/d60e1863-f0dc-4e23-906e-4267d1b311dd/tecnicas-ceramica.jpg?auto=format&q=50',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://arteisa.es/wp-content/uploads/2018/12/71FNTc46HL._SL1200_1808x755.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            }
            
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};