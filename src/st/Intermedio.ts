export class Intermedio {
  private temporal: number;
  private etiqueta: number;

  constructor() {
    this.temporal = -1;
    this.etiqueta = -1;
  }

  /**
   * genera un nuevo temporal
   */
  public newTemporal() {
    this.temporal++;
    return 'T' + this.temporal;
  }

  /**
   * genera una nueva etiqueta
   */
  public newEtiqueta() {
    return 'L' + this.etiqueta++;
  }

  public format(line_cod: String) {
    return  line_cod + ';\n';
  }
}
