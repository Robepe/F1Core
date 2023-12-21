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
    }

    getConstructors(): void {
        this.constructorService.getConstructors().subscribe((data) => {
            this.constructors = data;
        });
    }

    mostrarDetalles(constructor: any): void {
        console.log(`Detalles del equipo: ${JSON.stringify(constructor)}`);
        this.modalService.open(DetailConstructorComponent, { ariaLabelledBy: 'modal-basic-title' });
        // Aquí puedes abrir un modal o realizar otras acciones según tus necesidades.
    }

    addConstructor(): void {
        const modalRef = this.modalService.open(AddConstructorComponent, { ariaLabelledBy: 'modal-basic-title' });

        modalRef.result.then(
            (newConstructor) => {
                if (newConstructor) {
                    console.log("newConstructor", newConstructor)
                    // Aquí puedes llamar al servicio para crear un nuevo conductor.
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

    deleteConstructor(): void {
        console.log("GUAYANDO");
    }
}
