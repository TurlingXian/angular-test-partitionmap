import { Component, OnInit, VERSION } from "@angular/core";
import {
  PartitionMapSegment,
  PartitionMapSegmentWithChildren
} from "@ux-aspects/ux-aspects";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  iOSDataSet: PartitionMapSegmentWithChildren = {
    name: "iOS",
    children: []
  };

  androidDataSet: PartitionMapSegmentWithChildren = {
    name: "Android",
    children: []
  };

  iOSColors: string[][] = [
    ["rgba(41, 206, 255, 1)"],
    ["rgba(41, 206, 255, 0.7)"],
    ["rgba(41, 206, 255, 0.4)"]
  ];

  androidColors: string[][] = [
    ["rgba(47, 214, 195, 1)"],
    ["rgba(47, 214, 195, 0.7)"],
    ["rgba(47, 214, 195, 0.4)"]
  ];
  // true 2 false 3
  initState = true;

  showIOSMap = false;
  showAndroidMap = false;

  dataset = [
    {
      deviceID: "013c40f710479b64",
      logicName: "Nexus 5X",
      deviceStatus: "connected in-use",
      model: "Nexus 5X",
      osType: "ANDROID",
      osVersion: "7.1.1",
      deviceType: "real",
      workspaceUuid: "bb8e955a-1111-4891-8c55-7b69f3b83b14",
      workspaceName: "Workspace 1"
    },
    {
      deviceID: "013c40f710479b64",
      logicName: "Nexus 5X",
      deviceStatus: "connected reserved not in-use",
      model: "Nexus 5X",
      osType: "ANDROID",
      osVersion: "11",
      deviceType: "real",
      workspaceUuid: "bb8e955a-2222-4891-8c55-7b69f3b83b14",
      workspaceName: "Workspace 2"
    },
    {
      deviceID: "013c40f710479b64",
      logicName: "Nexus 5X",
      deviceStatus: "connected not reserved",
      model: "Nexus 5X",
      osType: "ANDROID",
      osVersion: "10",
      deviceType: "real",
      workspaceUuid: "bb8e955a-0000-4891-8c55-7b69f3b83b14",
      workspaceName: "Workspace Test"
    },
    {
      deviceID: "013c40f710479b64",
      logicName: "Nexus 5X",
      deviceStatus: "connected in-use",
      model: "Nexus 5X",
      osType: "ANDROID",
      osVersion: "7.1.2",
      deviceType: "real",
      workspaceUuid: "bb8e955a-1111-4891-8c55-7b69f3b83b14",
      workspaceName: "Workspace 1"
    },
    {
      deviceID: "013c40f710479b64",
      logicName: "Nexus 5X",
      deviceStatus: "disconnected",
      model: "Nexus 5X",
      osType: "ANDROID",
      osVersion: "7.1.1",
      deviceType: "real",
      workspaceUuid: "bb8e955a-0000-4891-8c55-7b69f3b83b14",
      workspaceName: "Workspace Test"
    },
    {
      deviceID: "013c40f710479b64",
      logicName: "Nexus 5X",
      deviceStatus: "disconnected",
      model: "Nexus 5X",
      osType: "IOS",
      osVersion: "13.0",
      deviceType: "real",
      workspaceUuid: "bb8e955a-0000-4891-8c55-7b69f3b83b14",
      workspaceName: "Workspace Test"
    },
    {
      deviceID: "013c40f710479b64",
      logicName: "Nexus 5X",
      deviceStatus: "disconnected",
      model: "Nexus 5X",
      osType: "IOS",
      osVersion: "12.2",
      deviceType: "real",
      workspaceUuid: "bb8e955a-0000-4891-8c55-7b69f3b83b14",
      workspaceName: "Workspace Test"
    },
    {
      deviceID: "013c40f710479b64",
      logicName: "Nexus 5X",
      deviceStatus: "disconnected",
      model: "Nexus 5X",
      osType: "IOS",
      osVersion: "14.2",
      deviceType: "real",
      workspaceUuid: "bb8e955a-0000-4891-8c55-7b69f3b83b14",
      workspaceName: "Workspace Test"
    },
    {
      deviceID: "013c40f710479b64",
      logicName: "Nexus 5X",
      deviceStatus: "disconnected",
      model: "Nexus 5X",
      osType: "IOS",
      osVersion: "14.0",
      deviceType: "real",
      workspaceUuid: "bb8e955a-0000-4891-8c55-7b69f3b83b14",
      workspaceName: "Workspace Test"
    }
  ];

  constructor() {}
  ngOnInit() {
    // this.currentDataset = this.dataset;
    this.renderDigram();
  }

  // changeLayer(num: number) {
  //   this.number = num;
  //   if (this.number === 2) {
  //     this.currentDataset = {
  //       name: "My Workspace",
  //       children: [
  //         {
  //           name: "Financial Data",
  //           value: 5
  //         },
  //         {
  //           name: "Identification Data",
  //           value: 5
  //         },
  //         {
  //           name: "Contact Data",
  //           value: 5
  //         },
  //         {
  //           name: "Account Data",
  //           value: 5
  //         }
  //       ]
  //     };
  //   } else {
  //     this.currentDataset = this.dataset;
  //   }
  // }

  renderDigram() {
    const iOSData: any[] = [];
    const androidData: any[] = [];
    console.log("this.dataset", this.dataset);
    // TODO: get dataset when init after reload
    this.dataset.forEach(device => {
      const deviceOSType = device.osType.toUpperCase();
      if (deviceOSType === "IOS") {
        this.generatePartitionData(iOSData, device.osVersion, "iOS");
      } else if (deviceOSType === "ANDROID") {
        this.generatePartitionData(androidData, device.osVersion, "Android");
      }
    });
    console.log({ iOSData }, { androidData });
    if (iOSData.length > 0) {
      this.showIOSMap = true;
      this.iOSDataSet = { children: iOSData, name: "iOS" };
    }
    if (androidData.length > 0) {
      if (this.initState === true) {
        this.showAndroidMap = true;
      } else {
        this.showAndroidMap = false;
      }
      this.androidDataSet = { children: androidData, name: "Android" };
    }
  }

  selecteSeg(seg) {
    this.renderDigram();
    if (
      this.androidDataSet.children &&
      this.androidDataSet.children.length > 0 &&
      this.iOSDataSet.children &&
      this.iOSDataSet.children.length > 0
    ) {
      if (this.showAndroidMap && this.showIOSMap) {
        if (seg.name === "iOS" || seg.type === "iOS") {
          this.showIOSMap = true;
          this.showAndroidMap = false;
        } else if (seg.name === "Android" || seg.type === "Android") {
          this.showIOSMap = false;
          this.showAndroidMap = true;
        }
      } else {
        this.initState = true;
        this.renderDigram();
        if (seg.name === "iOS") {
          this.showIOSMap = true;
          this.showAndroidMap = true;
        } else if (seg.name === "Android") {
          this.showIOSMap = true;
          this.showAndroidMap = true;
        }
      }
    }
  }

  private generatePartitionData(data: any[], version: string, type: string) {
    const versionList = version.split(".");
    if (versionList.length <= 0) {
      // Un supported format
      return;
    }
    const idx = data.findIndex(item => item.name === versionList[0]);
    if (idx < 0) {
      data.push({ name: versionList[0], value: 1, type });
    }
    if (versionList.length > 1) {
      const index = data.findIndex(item => item.name === versionList[0]);
      // true---initial state, false---not initial state
      if (this.initState) {
        data[index].value++;
      } else {
        if (data[index].hasOwnProperty("children")) {
          const innerIndex = data[index].children.findIndex(
            item => item.name === version
          );
          if (innerIndex >= 0) {
            data[index].children[innerIndex].value++;
          } else {
            data[index].children.push({ name: version, value: 1, type });
          }
        } else {
          data[index] = {
            name: versionList[0],
            children: [{ name: version, value: 1, type }],
            type
          };
        }
      }
    }
  }
  changeLayer(num) {
    if (num === 2) {
      this.initState = true;
    } else {
      this.initState = false;
    }
    this.renderDigram();
  }
}
