import { Component, OnInit } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      const directivos = carousel.querySelectorAll('.directivo-item');
      let scrolling = false;

      carousel.addEventListener('scroll', () => {
        if (!scrolling) {
          scrolling = true;

          window.requestAnimationFrame(() => {
            directivos.forEach((directivo) => {
              const rect = directivo.getBoundingClientRect();
              const isVisible = rect.left >= 0 && rect.right <= window.innerWidth;
              if (isVisible) {
                directivo.classList.add('active');
              } else {
                directivo.classList.remove('active');
              }
            });

            scrolling = false;
          });
        }
      });
    }

}
}
