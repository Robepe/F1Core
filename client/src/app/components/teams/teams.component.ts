import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConstructorService } from 'src/app/services/constructors/constructor-service.service';

import { AddConstructorComponent } from '../../modales/constructors/add-constructor/add-constructor/add-constructor.component';
import { DetailConstructorComponent } from '../../modales/constructors/detail-constructor/detail-constructor/detail-constructor.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit{
    constructors: any[] = [];

    constructor(private constructorService: ConstructorService, private modalService: NgbModal) { };

    ngOnInit(): void {
        this.getConstructors();
        this.constructorService.getUpdateEvent().subscribe(() => {
            this.getConstructors();
        });
    }

    getConstructors(): void {
        this.constructorService.getConstructors().subscribe((data) => {
            this.constructors = data;
        });
    }

    mostrarDetalles(constructor: any): void {
        const modalRef = this.modalService.open(DetailConstructorComponent, { size: 'l' });
        modalRef.componentInstance.constructorData = constructor;
    }

    addConstructor(): void {
        const modalRef = this.modalService.open(AddConstructorComponent, { ariaLabelledBy: 'modal-basic-title' });

        modalRef.result.then(
            (newConstructor) => {
                if (newConstructor) {
                    console.log("newConstructor", newConstructor)
                    this.constructorService.addConstructor(newConstructor).subscribe(
                        (createdConstructor) => {
                            console.log('Nuevo Constructor creado:', createdConstructor);
                            this.getConstructors();
                        },
                        (error) => {
                            console.error('Error al crear el Constructor:', error);
                        }
                    );
                }
            },
            (reason) => {
                // Manejar el cierre del modal sin datos (si es necesario)
            }
        );
    }

    deleteConstructor(constructorId: number): void {
        this.constructorService.deleteConstructor(constructorId)
            .subscribe(
                response => {
                    console.log('Conductor eliminado con éxito:', response);
                    this.getConstructors()
                },
                error => {
                    console.error('Error al eliminar conductor:', error);
                }
            );
    }
}
