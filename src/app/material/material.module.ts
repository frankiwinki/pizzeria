import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
export const material = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatIconModule,
  MatTableModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule
];
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
