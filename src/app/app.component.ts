import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import {BarcodeFormat} from "@zxing/library"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'qrScannerApp';
  name1 = 'ed33'

  ngVersion = VERSION.full;

  @ViewChild("scanner")

  scanner: ZXingScannerComponent;

  currentDevice: MediaDeviceInfo = null;

  hasCamera= true;
  hasPermission: boolean;
  qrResultString: string;

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;
  

  allowedFormats = [
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_8,
    BarcodeFormat.EAN_13,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.RSS_14,
    BarcodeFormat.RSS_EXPANDED,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_EAN_EXTENSION
  ];

  ngOnInit(): void {
    this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) =>
    {
      console.error('No se pudieron enumerar los dispositivos');
    });
    this.scanner.permissionResponse.subscribe((answer:boolean) => {
      this.hasPermission = true;
    });
  }

  handleQrCodeResult(resultString: string){
    console.log("Result: ", resultString);
    this.qrResultString = resultString;
  }

  clearResult(): void {
    this.qrResultString = null;
  }

  displayCameras(cams: any[]){
    this.availableDevices = cams;
    console.log("Devices", cams);
    if(cams && cams.length > 0){
      this.selectedDevice = cams[0];
    }
  }

  onDeviceSelectedChange(selectedValue: string){
    console.log("Selected: ", selectedValue);
    this.selectedDevice = this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      for(const device of devices){
    console.log("Selected: ", selectedValue);
        if(device.deviceId === selectedValue){
          console.log(this.selectedDevice);
        };
      };
    });
  };
}
