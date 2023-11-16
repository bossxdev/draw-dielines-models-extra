import TUCK_END_BOXES_TYPE_A from "@/components/models/TuckEndBoxesTypeA.dielines";
import TUCK_END_BOXES_TYPE_B from "@/components/models/TuckEndBoxesTypeB.dielines";
import TUCK_END_BOXES_TYPE_C from "@/components/models/TuckEndBoxesTypeC.dielines";
import SHOPPING_BAGS_TYPE_A from "@/components/models/ShoppingBagsTypeA.dielines";
import SHOPPING_BAGS_TYPE_A1 from "@/components/models/ShoppingBagsTypeA1.dielines";
import SHOPPING_BAGS_TYPE_B from "@/components/models/ShoppingBagsTypeB.dielines";
import SHOPPING_BAGS_TYPE_B1 from "@/components/models/ShoppingBagsTypeB1.dielines";
import SHOPPING_BAGS_TYPE_C from "@/components/models/ShoppingBagsTypeC.dielines";
import SHOPPING_BAGS_TYPE_C1 from "@/components/models/ShoppingBagsTypeC1.dielines";
import SHOPPING_BAGS_TYPE_D from "@/components/models/ShoppingBagsTypeD.dielines";
import SHOPPING_BAGS_TYPE_E from "@/components/models/ShoppingBagsTypeE.dielines";
import SHOPPING_BAGS_TYPE_F from "@/components/models/ShoppingBagsTypeF.dielines";
import SNAP_LOCK_BOXES_TYPE_A from "@/components/models/SnapLockBoxesTypeA.dielines";
import SNAP_LOCK_BOXES_TYPE_B from "@/components/models/SnapLockBoxesTypeB.dielines";
import SNAP_LOCK_BOXES_TYPE_C from "@/components/models/SnapLockBoxesTypeC.dielines";
import TRAY_BOXES_TYPE_A from "@/components/models/TrayBoxesTypeA.dielines";
import TRAY_BOXES_TYPE_B from "@/components/models/TrayBoxesTypeB.dielines";
import TRAY_BOXES_TYPE_C from "@/components/models/TrayBoxesTypeC.dielines";
import ENVELOPE_TYPE_A from "@/components/models/EnvelopeTypeA.dielines";
import CREAM_BOXES_SINGLE_LOCK_TYPE_A from "@/components/models/CreamBoxesSingleLockTypeA.dielines";
import BOTTOM_BAGS from "@/components/models/BottomBags.dielines";

export const Models = (name, options) => {

    switch (name) {
        case 'TUCK END BOXES TYPE A':
            return TUCK_END_BOXES_TYPE_A.MainDiecuts({...options});
        case 'TUCK END BOXES TYPE B':
            return TUCK_END_BOXES_TYPE_B.MainDiecuts({...options});
        case 'TUCK END BOXES TYPE C':
            return TUCK_END_BOXES_TYPE_C.MainDiecuts({...options});
        case 'SHOPPING BAGS TYPE A':
            return SHOPPING_BAGS_TYPE_A.MainDiecuts({...options});
        case 'SHOPPING BAGS TYPE A1':
            return SHOPPING_BAGS_TYPE_A1.MainDiecuts({...options});
        case 'SHOPPING BAGS TYPE B':
            return SHOPPING_BAGS_TYPE_B.MainDiecuts({...options});
        case 'SHOPPING BAGS TYPE B1':
            return SHOPPING_BAGS_TYPE_B1.MainDiecuts({...options});
        case 'SHOPPING BAGS TYPE C':
            return SHOPPING_BAGS_TYPE_C.MainDiecuts({...options});
        case 'SHOPPING BAGS TYPE C1':
            return SHOPPING_BAGS_TYPE_C1.MainDiecuts({...options});
        case 'SHOPPING BAGS TYPE D':
            return SHOPPING_BAGS_TYPE_D.MainDiecuts({...options});
        case 'SHOPPING BAGS TYPE E':
            return SHOPPING_BAGS_TYPE_E.MainDiecuts({...options});
        case 'SHOPPING BAGS TYPE F':
            return SHOPPING_BAGS_TYPE_F.MainDiecuts({...options});
        case 'SNAP LOCK BOXES TYPE A':
            return SNAP_LOCK_BOXES_TYPE_A.MainDiecuts({...options});
        case 'SNAP LOCK BOXES TYPE B':
            return SNAP_LOCK_BOXES_TYPE_B.MainDiecuts({...options});
        case 'SNAP LOCK BOXES TYPE C':
            return SNAP_LOCK_BOXES_TYPE_C.MainDiecuts({...options});
        case 'TRAY BOXES TYPE A':
            return TRAY_BOXES_TYPE_A.MainDiecuts({...options});
        case 'TRAY BOXES TYPE B':
            return TRAY_BOXES_TYPE_B.MainDiecuts({...options});
        case 'TRAY BOXES TYPE C':
            return TRAY_BOXES_TYPE_C.MainDiecuts({...options});
        case 'ENVELOPE TYPE A':
            return ENVELOPE_TYPE_A.MainDiecuts({...options});
        case 'CREAM BOXES SINGLE LOCK TYPE A':
            return CREAM_BOXES_SINGLE_LOCK_TYPE_A.MainDiecuts({...options});
            case 'BOTTOM BAGS':
            return BOTTOM_BAGS.MainDielines({...options});
        default:
            return TUCK_END_BOXES_TYPE_A.MainDiecuts({...options});
    }
}