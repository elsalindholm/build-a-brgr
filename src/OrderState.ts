import { action, observable } from 'mobx';

export class OrderState {
  @observable public cName: string = '';
  @observable public cStAddress: string = '';
  @observable public cCity: string = '';
  @observable public cPostcode: string = '';
  @observable public cEmail: string = '';
  @observable public cPhoneNum: string = '';

  @observable public deliveryButtonDisabled: boolean = true;

  @action public setCName(name: string) {
    this.cName = name;
    this.validateInput();
  }
  @action public setCStAddress(address: string) {
    this.cStAddress = address;
    this.validateInput();
  }
  @action public setCCity(city: string) {
    this.cCity = city;
    this.validateInput();
  }
  @action public setCPostcode(postcode: string) {
    this.cPostcode = postcode;
    this.validateInput();
  }
  @action public setCEmail(email: string) {
    this.cEmail = email;
    this.validateInput();
  }
  @action public setCPhoneNum(phNum: string) {
    this.cPhoneNum = phNum;
    this.validateInput();
  }

  @action public validateInput() {
    if (
      this.cName.length > 2 &&
      this.cStAddress.length > 2 &&
      this.cCity.length > 2 &&
      this.cPostcode.length > 2 &&
      this.cEmail.length > 2 &&
      this.cPhoneNum.length > 2
    ) {
      this.deliveryButtonDisabled = false;
    }
  }
}
