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
  }
  @action public setCStAddress(address: string) {
    this.cStAddress = address;
  }
  @action public setCCity(city: string) {
    this.cCity = city;
  }
  @action public setCPostcode(postcode: string) {
    this.cPostcode = postcode;
  }
  @action public setCEmail(email: string) {
    this.cEmail = email;
  }
  @action public setCPhoneNum(phNum: string) {
    this.cPhoneNum = phNum;
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
