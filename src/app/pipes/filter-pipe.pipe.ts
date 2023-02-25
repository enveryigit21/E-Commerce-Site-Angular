import { Todos } from './../models/model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Todos[], filterText: string): Todos[] {
    filterText = filterText? filterText.toLocaleLowerCase() : "" ;
   return filterText?value.filter((p:Todos)=> p.title.toLocaleLowerCase().indexOf(filterText)!==-1): value ;
  }

}





















// transform(value: Todos[], filterText : string): Todos[] {
//   filterText = filterText?filterText.toLocaleLowerCase() : ""
//   return filterText?value.filter((p:Todos)=> p.title.toLocaleLowerCase().indexOf(filterText)!==-1): value
// }
