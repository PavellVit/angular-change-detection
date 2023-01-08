import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AbstractChangeDetectionComponent, CMP_NAME, LEVEL } from "../abstract-change-detection.component";
import { template } from "../change-detection.component.template";
import { Destroy } from "../helpers/destroy";
import { ColorService } from "../services/color.service";

const NAME = "comp-1-x-1-3";

const CD_STRATEGY = ChangeDetectionStrategy.Default;

@Component({
  selector: `app-${NAME}`,
  template: template(),
  styleUrls: ["./../change-detection.component.scss"],
  providers: [ColorService, Destroy, { provide: CMP_NAME, useValue: NAME }, { provide: LEVEL, useValue: 4 }],
  changeDetection: CD_STRATEGY,
})
export class Comp_1_x_1_3_Component extends AbstractChangeDetectionComponent {}
