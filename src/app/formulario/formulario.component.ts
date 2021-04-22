import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  elementos = new FormControl();

  lista!: Producto[];

  auxLista!:String[];

  ngOnInit(): void {
    this.lista = [];
    this.auxLista=[];
    //let variable = JSON.parse(localStorage.getItem("elementos")|| '{}');
    //if(variable!=null){
    //  for(let elements of variable){
    //    this.lista.push(elements)
    //  }
    //}

  }

//  agregar(){
  //  this.lista.push(this.elementos.value);
   // localStorage.setItem('elementos', JSON.stringify(this.lista));
    //this.elementos.setValue('');
  //}

  datos!:string;


  formulario = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    descripcion: new FormControl('')

  });

  actualizar(){

    this.auxLista = [];
    let validado: Boolean = false;
    let validaciones:number = 0;

    // iterar en form controls para validar campos
    for(let campo in this.formulario.controls){
      //console.log(this.formulario.controls[campo].value)
      let aux =this.formulario.controls[campo].value;
      if (aux.length>2 && aux.length <51){
        validaciones += 1;
      }
    }

    console.log(validaciones)
    if (validaciones ==4){
      
      
      console.log("campos validados")
      for(let campo in this.formulario.controls){  
        let aux =this.formulario.controls[campo].value;
        this.auxLista.push(aux);
      }
      let auxProducto = new Producto(this.auxLista[0],this.auxLista[1],this.auxLista[2],this.auxLista[3]);

      this.lista[this.lista.findIndex(element=>element.codigo==auxProducto.codigo)] =auxProducto;
    


  }
}
  eliminar(){

    let codigoEliminar = this.formulario.value.codigo;
    console.log(codigoEliminar);

    let index = this.lista.findIndex(element=>element.codigo ===codigoEliminar);
    if (index > -1){
    this.lista.splice(index,1);
    }

  }

  metodo(){

    //validar campos

    let validado: Boolean = false;
    let validaciones:number = 0;

    // iterar en form controls para validar campos
    for(let campo in this.formulario.controls){
      //console.log(this.formulario.controls[campo].value)
      let aux =this.formulario.controls[campo].value;
      if (aux.length>2 && aux.length <51){
        validaciones += 1;
      }
    }

    console.log(validaciones)
    if (validaciones ==4){
      this.auxLista =[];
      
      console.log("campos validados")
      for(let campo in this.formulario.controls){  
       let aux =this.formulario.controls[campo].value;
       this.auxLista.push(aux);


      }
      
      this.lista.push(new Producto(this.auxLista[0],this.auxLista[1],this.auxLista[2],this.auxLista[3]));
  
      


    }
    


  }


  
}

class Producto{

  codigo:String;
  nombre:String;
  precio:String;
  descripcion:String;
  constructor(codigo:String, nombre: String,precio:String,descripcion:String){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
  }

}