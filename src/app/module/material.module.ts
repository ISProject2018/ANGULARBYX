import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDividerModule,
    MatDialogModule,
    MatStepperModule,
    MatBadgeModule,
    MatTableModule,
    MatExpansionModule
  ],
  exports: [
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDividerModule,
    MatDialogModule,
    MatStepperModule,
    MatBadgeModule,
    MatTableModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
