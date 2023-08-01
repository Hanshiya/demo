import { LightningElement, api } from "lwc";
import LightningConfirm from "lightning/confirm";
export default
class recordCardQuickFiles extends LightningElement {
    @api
    recordId;
    onDeleteAllFilesButtonClick() {
        const confirmation = LightningConfirm.open({
            Message: "Are you sure you want to delete all files?",
            Label: "Are you sure you want to delete all files?",
            Variant: "headerless"
        });
        if(confirmation){
            //... proceed with
            //... Apex Logic to delete Files.
            //... We will not check this comment.
        }
    }
}