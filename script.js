function calcular() {
  // Obtener valores del formulario
  const empresa1 = document.getElementById('empresa1').value;
  const tim = parseInt(document.getElementById('tim').value);
  const costo = parseInt(document.getElementById('costo').value);
  const instalacion = parseInt(document.getElementById('instalacion').value);
  const valdesecho = parseInt(document.getElementById('valdesecho').value);
  const vidutil = parseInt(document.getElementById('vidutil').value);

  const empresa2 = document.getElementById('empresa2').value;
  const MO1 = parseInt(document.getElementById('MO1').value);
  const instalacion1 = parseInt(document.getElementById('instalacion1').value);
  const vidautil1 = parseInt(document.getElementById('vidautil1').value);
  const valdesecho1 = parseInt(document.getElementById('valdesecho1').value);
  const no1 = parseInt(document.getElementById('no1').value);
  const no2 = parseInt(document.getElementById('no2').value);
  const no3 = parseInt(document.getElementById('no3').value);
  const no4 = parseInt(document.getElementById('no4').value);
  const no5 = parseInt(document.getElementById('no5').value);
  const mano1 = parseInt(document.getElementById('mano1').value);
  const mano2 = parseInt(document.getElementById('mano2').value);
  const mano3 = parseInt(document.getElementById('mano3').value);
  const mano4 = parseInt(document.getElementById('mano4').value);
  const mano5 = parseInt(document.getElementById('mano5').value);
  const compra1 = parseInt(document.getElementById('compra1').value);

  const empresa3 = document.getElementById('empresa3').value;
  const MO2 = parseInt(document.getElementById('MO2').value);
  const instalacion2 = parseInt(document.getElementById('instalacion2').value);
  const vidautil2 = parseInt(document.getElementById('vidautil2').value);
  const valdesecho2 = parseInt(document.getElementById('valdesecho2').value);
  const no = parseInt(document.getElementById('no').value);
  const mano = parseInt(document.getElementById('mano').value);
  const compra2 = parseInt(document.getElementById('compra2').value);
  const tas = parseFloat(document.getElementById('tas').value);
  const capital = parseFloat(document.getElementById('capital').value);

  // Calcular valores
  const inv1 = costo + instalacion;
  const inv2 = MO1 + instalacion1;
  const inv3 = MO2 + instalacion2;

  const total = inv1 - valdesecho;
  const total1 = inv2 - valdesecho1;
  const total2 = inv3 - valdesecho2;

  const dep = total / vidutil;
  const dep1 = total1 / vidautil1;
  const dep2 = total2 / vidautil2;

  const depa = dep * tim;
  const libros = inv1 - depa;

  const utilidad1 = libros - compra1;
  const res1 = Math.round(utilidad1 * 0.30);
  const ver1 = inv2 - compra1 - res1;

  const utilidad2 = libros - compra2;
  const res2 = Math.round(utilidad2 * 0.30);
  const ver2 = inv3 - compra2 - res2;

  const depreciacion1 = total1 / vidautil1;
  const animp1 = no1 + mano1 - depreciacion1;
  const animp2 = no2 + mano2 - depreciacion1;
  const animp3 = no3 + mano3 - depreciacion1;
  const animp4 = no4 + mano4 - depreciacion1;
  const animp5 = no5 + mano5 - depreciacion1;

  const impuesto1 = Math.round(animp1 * 0.30);
  const impuesto2 = Math.round(animp2 * 0.30);
  const impuesto3 = Math.round(animp3 * 0.30);
  const impuesto4 = Math.round(animp4 * 0.30);
  const impuesto5 = Math.round(animp5 * 0.30);

  const desp1 = animp1 - impuesto1;
  const desp2 = animp2 - impuesto2;
  const desp3 = animp3 - impuesto3;
  const desp4 = animp4 - impuesto4;
  const desp5 = animp5 - impuesto5;

  const flu1 = desp1 + depreciacion1;
  const flu2 = desp2 + depreciacion1;
  const flu3 = desp3 + depreciacion1;
  const flu4 = desp4 + depreciacion1;
  const flu5 = desp5 + depreciacion1;
  const flutotal = flu1 + flu2 + flu3 + flu4 + flu5;

  // Mostrar resultados
  const resultado1 = `
      <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">SOFTWARE DE FINANZAS ULTIMO PARCIAL</h1>

    <!-- Tabla de Concepto -->
    <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4">CONCEPTO</h2>
        <div class="grid grid-cols-4 gap-2">
            <div class="font-semibold"> </div>
            <div class="font-semibold">${empresa1}</div>
            <div class="font-semibold">${empresa2}</div>
            <div class="font-semibold">${empresa3}</div>

            <div>MO</div>
            <div>${costo}</div>
            <div>${MO1}</div>
            <div>${MO2}</div>

            <div>GASTOS DE INSTALACION</div>
            <div>${instalacion}</div>
            <div>${instalacion1}</div>
            <div>${instalacion2}</div>

            <div>TOTAL INVERSION</div>
            <div>${inv1}</div>
            <div>${inv2}</div>
            <div>${inv3}</div>

            <div>VALOR DE DESECHO</div>
            <div>${valdesecho}</div>
            <div>${valdesecho1}</div>
            <div>${valdesecho2}</div>

            <div>TOTAL</div>
            <div>${total}</div>
            <div>${total1}</div>
            <div>${total2}</div>

            <div>VIDA UTIL</div>
            <div>${vidutil}</div>
            <div>${vidautil1}</div>
            <div>${vidautil2}</div>

            <div>DEPRECIACION ANUAL</div>
            <div>${dep}</div>
            <div>${dep1}</div>
            <div>${dep2}</div>

            <div>DEPRECIACION ACUMULADA</div>
            <div>${depa}</div>
            <div></div>
            <div></div>

            <div>VALOR EN LIBROS</div>
            <div>${libros}</div>
            <div></div>
            <div></div>
        </div>
    </div>

    <!-- Tabla de Inversion Inicial -->
    <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4">INVERSION INICIAL</h2>
        <div class="grid grid-cols-2 gap-2">
            <div class="font-semibold">${empresa2}</div>
            <div class="font-semibold">${empresa3}</div>

            <div>Compra</div>
            <div>${inv2}</div>
            <div>${inv3}</div>

            <div>Valor en libros</div>
            <div>${libros}</div>
            <div>${libros}</div>

            <div>Venta</div>
            <div>${compra1}</div>
            <div>${compra2}</div>

            <div>Utilidad</div>
            <div>${utilidad1}</div>
            <div>${utilidad2}</div>

            <div>Inversion inicial</div>
            <div>${ver1}</div>
            <div>${ver2}</div>
        </div>
    </div>

    <!-- Tabla de Flujos de Efectivo -->
    <div>
        <h2 class="text-xl font-semibold mb-4">FLUJOS DE EFECTIVO HERREROS</h2>
        <div class="grid grid-cols-6 gap-2">
            <div class="font-semibold">concepto</div>
            <div class="col-span-5 font-semibold">ventas</div>
            <div class="col-span-5 font-semibold">costo</div>
            <div class="col-span-5 font-semibold">utilidades antes de DEP e IMP</div>
            <div class="col-span-5 font-semibold">depreciacion</div>
            <div class="col-span-5 font-semibold">utilidades antes de impuestos</div>
            <div class="col-span-5 font-semibold">impuestos</div>
            <div class="col-span-5 font-semibold">utilidad despues de impuesto</div>
            <div class="col-span-5 font-semibold">depreciacion</div>
            <div class="col-span-5 font-semibold">flujos de efectivo</div>

            <div>HERREROS</div>
            <div>${no1} ${no2} ${no3} ${no4} ${no5}</div>
            <div>${mano1} ${mano2} ${mano3} ${mano4} ${mano5}</div>
            <div>${no1 + mano1} ${no2 + mano2} ${no3 + mano3} ${no4 + mano4} ${no5 + mano5}</div>
            <div>${depreciacion1} ${depreciacion1} ${depreciacion1} ${depreciacion1} ${depreciacion1}</div>
            <div>${animp1} ${animp2} ${animp3} ${animp4} ${animp5}</div>
            <div>${impuesto1} ${impuesto2} ${impuesto3} ${impuesto4} ${impuesto5}</div>
            <div>${desp1} ${desp2} ${desp3} ${desp4} ${desp5}</div>
            <div>${depreciacion1} ${depreciacion1} ${depreciacion1} ${depreciacion1} ${depreciacion1}</div>
            <div>${flu1} ${flu2} ${flu3} ${flu4} ${flu5}</div>

            <div></div>
            <div>${flutotal}</div>
        </div>
    </div>
</div>
  `;

  const resultado2 = `
        SOFTWARE DE FINANZAS ULTIMO PARCIAL
        CONCEPTO                    ${empresa1}           ${empresa2}          ${empresa3}
        MO                          ${costo}           ${MO1}          ${MO2}
        GASTOS DE INSTALACION       ${instalacion}           ${instalacion1}          ${instalacion2}
        TOTAL INVERSION             ${inv1}           ${inv2}          ${inv3}
        VALOR DE DESECHO            ${valdesecho}           ${valdesecho1}          ${valdesecho2}
        TOTAL                       ${total}           ${total1}          ${total2}
        VIDA UTIL                   ${vidutil}           ${vidautil1}          ${vidautil2}
        DEPRECIACION ANUAL          ${dep}           ${dep1}          ${dep2}
        DEPRECIACION ACUMULADA      ${depa}
        VALOR EN LIBROS             ${libros}
        
        INVERSION INICIAL
        ${empresa2}
        Compra                            ${inv2}
        Valor en libros                   ${libros}
        Venta           ${compra1}                ${compra1}
        Utilidad        ${utilidad1}                ${res1}
        Inversion inicial                 ${ver1}
        
        INVERSION INICIAL
        ${empresa3}
        Compra                            ${inv3}
        Valor en libros                   ${libros}
        Venta           ${compra2}                ${compra2}
        Utilidad        ${utilidad2}                ${res2}
        Inversion inicial                 ${ver2}
        
        FLUJOS DE EFECTIVO
        HERREROS
        concepto
        ventas       ${no1} ${no2} ${no3} ${no4} ${no5}
        costo        ${mano1} ${mano2} ${mano3} ${mano4} ${mano5}
        utilidades antes de DEP e IMP    ${no1 + mano1} ${no2 + mano2} ${no3 + mano3} ${no4 + mano4} ${no5 + mano5}
        depreciacion ${depreciacion1} ${depreciacion1} ${depreciacion1} ${depreciacion1} ${depreciacion1}
        utilidades antes de impuestos    ${animp1} ${animp2} ${animp3} ${animp4} ${animp5}
        impuestos    ${impuesto1} ${impuesto2} ${impuesto3} ${impuesto4} ${impuesto5}
        utilidad despues de impuesto    ${desp1} ${desp2} ${desp3} ${desp4} ${desp5}
        depreciacion ${depreciacion1} ${depreciacion1} ${depreciacion1} ${depreciacion1} ${depreciacion1}
        flujos de efectivo    ${flu1} ${flu2} ${flu3} ${flu4} ${flu5}
        ${flutotal}
  `

  document.getElementById('resultados').innerHTML = resultado1 + resultado2;
}
