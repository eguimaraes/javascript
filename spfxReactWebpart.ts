import * as React from 'react';
import styles from './ReactExemploCompleto.module.scss';
import { IReactExemploCompletoProps } from './IReactExemploCompletoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { Accordion } from '@pnp/spfx-controls-react/lib/Accordion';
import { Carousel, CarouselButtonsLocation } from '@pnp/spfx-controls-react/lib/Carousel';
import { FieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-controls-react/lib/FieldCollectionData';
import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';
import { ComboBoxListItemPicker } from '@pnp/spfx-controls-react/lib/ListItemPicker';
import { DateTimePicker, DateConvention, TimeConvention } from '@pnp/spfx-controls-react/lib/dateTimePicker';
import { FileTypeIcon, ApplicationType, IconType, ImageSize } from "@pnp/spfx-controls-react/lib/FileTypeIcon";


import * as jQuery from "jquery";

import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';


import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';




import * as bootstrap from "bootstrap";
import { PageContext } from '@microsoft/sp-page-context';
import { WebPartContext } from '@microsoft/sp-webpart-base';




require('../../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');
require('../../../../node_modules/@fortawesome/fontawesome-free/js/all.min.js');




export default class ReactExemploCompleto extends React.Component<IReactExemploCompletoProps, {}> {
  private _getPeoplePickerItems(items: any[]) {
    console.log('Items:', items);
  }

  private onSelectedItem(items: []) {
    console.log("selected items:", items);
}
  
  private getPP() {
    
    var selPessoas = <PeoplePicker
      context={this.props.context}
      titleText="People Picker"
      personSelectionLimit={3}
      showtooltip={true}
      isRequired={true}
      disabled={false}
      showHiddenInUI={false}
      principalTypes={[PrincipalType.User]}
      resolveDelay={1000} />;
    
    return selPessoas;


  }


  private getHello() {
    var hw = <div className={styles.reactExemploCompleto}>
    <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>;
      
    return hw;
  }


  private getBody() {
    
    var a = [this.getHello(), this.getPP() ];
    
    
    return a;



  }

  private getAccordion():any {
    
    let item = { "Question": "333", "Reponse": "33", Langue: { "Nom": "1" },"index":"1" };
        return (
      <Accordion title={item.Question} defaultCollapsed={true} className={"itemCell"} key={item.index}>
        <div className={"itemContent"}>
          <div className={"itemResponse"}>{item.Reponse}</div>
          <div className={"itemIndex"}>{`Langue :  ${item.Langue.Nom}`}</div>
        </div>
      </Accordion>
    );
  }

  private getFieldCollectionData() {
  
    return (<FieldCollectionData 
      key={"FieldCollectionData"} 
      label={"Fields Collection"} 
      manageBtnLabel={"Manage"} onChanged={(value) => { console.log(value); }}
      panelHeader={"Manage values"}
    
      executeFiltering={(searchFilter: string, item: any) => {
        return item["Field2"] === +searchFilter;
      }}
      itemsPerPage={3}
      fields={[
        {id: "Field1", title:"String field", type: CustomCollectionFieldType.string, required: true},
        {id: "Field2", title:"Number field", type: CustomCollectionFieldType.number},
        {id: "Field3", title:"URL field", type: CustomCollectionFieldType.url},
        {id: "Field4", title:"Boolean field", type: CustomCollectionFieldType.boolean}
      ]}
      value={[
        { 
          "Field1": "String value", "Field2": "123", "Field3": "https://pnp.github.io/", "Field4": true
        }
      ]}
    />);


  }
  

  private getFilePicker() {
    return (<FilePicker
      bingAPIKey="<BING API KEY>"
      accepts= {[".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"]}
      buttonIcon="FileImage"
      onSave={(filePickerResult: IFilePickerResult) => { this.setState({ filePickerResult }); }}
      onChanged={(filePickerResult: IFilePickerResult) => { this.setState({ filePickerResult }); }}
      context={this.props.context}
    /> );

  }

  private getComboBoxList() {
  
    return(<ComboBoxListItemPicker listId='c4b86296-8354-41f8-ad9b-283fd5811405'
    columnInternalName='Title'
    keyColumnInternalName='Id'
    //filter="Title eq 'SPFx'"
    onSelectedItem={this.onSelectedItem}
    webUrl={this.props.context.pageContext.web.absoluteUrl}
    spHttpClient={this.props.context.spHttpClient} />);

  }
  

private getDatePickerU(){ return (<DateTimePicker label="DateTime Picker - 12h"
dateConvention={DateConvention.DateTime}
timeConvention={TimeConvention.Hours12} /> 
);}

  private getIcon() {
    
    return (<div><FileTypeIcon type={IconType.font} application={ApplicationType.Word} />
      <FileTypeIcon type={IconType.font} application={ApplicationType.Excel} />
      <FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.docx" />
      <FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.xslx" />
      
      /* Showing the icon image */
      <FileTypeIcon type={IconType.image} application={ApplicationType.Word} />
      <FileTypeIcon type={IconType.image} path="https://contoso.sharepoint.com/documents/filename.docx" />
      
      /* Icon image allows three different sizes */
      <FileTypeIcon type={IconType.image} size={ImageSize.small} application={ApplicationType.Excel} />
      <FileTypeIcon type={IconType.image} size={ImageSize.medium} application={ApplicationType.Excel} />
      <FileTypeIcon type={IconType.image} size={ImageSize.large} application={ApplicationType.Excel} />);
    </div>);
  }
  
 
       
       
  public render(): React.ReactElement<IReactExemploCompletoProps> {
    return (
      <div>
        {this.getAccordion()}
        {this.getComboBoxList()}
        {this.getDatePickerU()}
        {this.getFieldCollectionData()}
        {this.getFilePicker()}
        {this.getHello()}
        {this.getIcon()}
        {this.getPP()}

        </div>
     );
  }
}
