import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform{
  transform(value, limit){
    return value.substr(0,limit) + "..."
  }
}
