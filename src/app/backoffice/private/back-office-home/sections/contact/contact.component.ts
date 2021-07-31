import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() sellersName: string = '';
  Email: any;
  sellersLName: string = '';
  password: string = '';
  id: any;
  cellphoneNumber: any;
  countMore: number = 0;
  user: any;
  clicked: number = 0;
  contactForm: FormGroup;
  contactWebpage: string = '';
  contactWhatsapp: string = '';
  contactInstagram: string = '';
  contactFacebook: string = '';
  contactEmail: string = '';

  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth, private firebase: AngularFireDatabase, private formBuilder: FormBuilder) {
    this.contactForm = this.createContactForm();
    this.loadSellersInfo();
  }

  ngOnInit(): void {
    $('.sideMenuBtn').on('click', function () {
      var hasOptions = $(this).hasClass('options');

      if (hasOptions) {
        $('.sideMenuBtn').removeClass('active');
        $(this).addClass('active');
      } else {
        $('.sideMenuBtn').removeClass('active');
        $(this).addClass('active');
        $('.sideMenuInnerBtn').removeClass('active');
      }
    });

    $('.sideMenuInnerBtn').on('click', function () {
      var hasOptions = $('.sideMenuBtn').hasClass('options');

      if (hasOptions) {
        $('.sideMenuBtn').removeClass('active');
        $('.sideMenuBtn.options').addClass('active');
      }

      $('.sideMenuInnerBtn').removeClass('active');
      $(this).addClass('active');
    });
  }

  loadSellersInfo() {
    let Key: any;

    this.firebaseAuth.user.subscribe((async (data) => {
      this.user = data;
      this.Email = this.user['email'];
      this.sellersName = this.user['displayName'];

      await this.firebase.database.ref('users').once('value', (users) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == this.Email) {
            Key = childKey;
            user.forEach((info => {
              info.forEach((key => {
                const keyChildKey = key.key;
                if (keyChildKey == 'contact') {
                  key.forEach((contactInfo => {
                    const contactInfoChildKey = contactInfo.key;
                    const contactInfoChildData = contactInfo.val();
                    if (contactInfoChildKey == 'webpage') {
                      this.contactWebpage = contactInfoChildData;
                    }
                    if (contactInfoChildKey == 'whatsapp') {
                      this.contactWhatsapp = contactInfoChildData;
                    }
                    if (contactInfoChildKey == 'instagram') {
                      this.contactInstagram = contactInfoChildData;
                    }
                    if (contactInfoChildKey == 'facebook') {
                      this.contactFacebook = contactInfoChildData;
                    }
                    if (contactInfoChildKey == 'contactEmail') {
                      this.contactEmail = contactInfoChildData;
                    }
                  }));
                }
              }));
            }));
          }
        });
      });

      this.contactForm.controls.webpage.setValue(this.contactWebpage);
      this.contactForm.controls.whatsapp.setValue(this.contactWhatsapp);
      this.contactForm.controls.instagram.setValue(this.contactInstagram);
      this.contactForm.controls.facebook.setValue(this.contactFacebook);
      this.contactForm.controls.contactEmail.setValue(this.contactEmail);
    }));
  }

  goToMyProfile() {
    this.router.navigate(['/sellers/myprofile']);
  }

  goToMyProducts() {
    this.router.navigate(['/sellers/products']);
  }

  goToContact() {
    this.router.navigate(['/sellers/contact']);
  }

  createContactForm(): FormGroup {
    return this.formBuilder.group(
      {
        webpage: [
          null,
          Validators.compose([])
        ],
        whatsapp: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern(/[0-9]/g),
          ])
        ],
        instagram: [
          null,
          Validators.compose([])
        ],
        facebook: [
          null,
          Validators.compose([])
        ],
        contactEmail: [
          null,
          Validators.compose([
            Validators.email
          ])
        ]
      }
    )
  }

  sideMenuOptionClicked() {
    var icon: any = $('.options').find('i.fas');
    var btnOptionsContainer: any = $('.btnOptionsContainer');

    if (this.clicked == 0) {
      icon.css('transform', 'rotate(-90deg)');
      btnOptionsContainer.css('transform', 'scaleY(1)');
      btnOptionsContainer.css('opacity', '1');
      this.clicked = 1;
    } else {
      $('i.fas').css('transform', 'rotate(0deg)');
      btnOptionsContainer.css('transform', 'scaleY(0)');
      btnOptionsContainer.css('opacity', '0');
      this.clicked = 0;
    }
  }

  dropDownOptions() {
    const query: string = '.wrapper .profileOptionsContainer';
    const sellersName: any = document.querySelector(query);

    if (this.countMore == 0) {
      this.countMore = 1;
      sellersName.style.transform = 'scale(1)';
      sellersName.style.opacity = 1;
    } else {
      this.countMore = 0;
      sellersName.style.transform = 'scale(0)';
      sellersName.style.opacity = 0;
    }
  }

  onSubmit() {
    let Key: any;

    if (this.contactForm.valid) {

      this.firebaseAuth.user.subscribe((async (data) => {
        this.user = data;
        this.Email = this.user['email'];

        await this.firebase.database.ref('users').once('value', (users) => {
          users.forEach((user) => {
            const childKey = user.key;
            const childData = user.val();
            if (childData.email == this.Email) {
              Key = childKey;
            }
          });
        });

        this.firebase.database.ref(`users/${Key}/company/contact`).update({
          webpage: this.contactForm.controls.webpage.value,
          whatsapp: this.contactForm.controls.whatsapp.value,
          instagram: this.contactForm.controls.instagram.value,
          facebook: this.contactForm.controls.facebook.value,
          contactEmail: this.contactForm.controls.contactEmail.value,
        })

        const query: string = '.wrapper #successMessage';
        const successMessage: any = document.querySelector(query);
        successMessage.style.display = 'flex';
      }));

    }
    else {
      const query: string = '.wrapper #failureMessage';
      const failureMessage: any = document.querySelector(query);
      failureMessage.style.display = 'flex';

      setTimeout(() => {
        failureMessage.style.display = 'none';
      }, 3000);
    }
  }

  async doLogout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  validateField(controlName: string): boolean {
    let control = this.contactForm.controls[controlName]
    return control.invalid && control.touched
  }
}
