
$(document).ready(function () {

    "use strict";

    $("#tblEditable").on('click', '.btnEdit', function () {
        $("#tblEditable span").show();
        $("#tblEditable input").hide();
        $(".clsShow").show();
        $(".clsHide").hide();
        var currentRow = $(this).closest("tr");
        currentRow.find(".clsHide").show();
        currentRow.find(".clsHide").css("display", "inline-block");
        currentRow.find("input:eq(0)").val(currentRow.find("span:eq(0)").text());
        currentRow.find("input:eq(1)").val(currentRow.find("span:eq(1)").text());
        currentRow.find("input:eq(2)").val(currentRow.find("span:eq(2)").text());
        currentRow.find("input:eq(3)").val(currentRow.find("span:eq(3)").text());
        currentRow.find("span").hide();
        currentRow.find(".clsShow").hide();
    });

    $("#tblEditable").on('click', '.btnDelete', function () {
        $(this).closest("tr").remove();
    });

    $("#tblEditable").on('click', '.btnSave', function () {
        var currentRow = $(this).closest("tr");
        currentRow.find(".clsHide").hide();
        currentRow.find("span:eq(0)").text(currentRow.find("input:eq(0)").val());
        currentRow.find("span:eq(1)").text(currentRow.find("input:eq(1)").val());
        currentRow.find("span:eq(2)").text(currentRow.find("input:eq(2)").val());
        currentRow.find("span:eq(3)").text(currentRow.find("input:eq(3)").val());
        currentRow.find("span").show();
        currentRow.find(".clsShow").show();
    });

    $("#tblEditable").on('click', '.btnCancel', function () {
        var currentRow = $(this).closest("tr");
        currentRow.find(".clsHide").hide();
        currentRow.find(".clsShow").show();

        currentRow.find("span").show();
    });


    $("#btnAdd").on('click', function () {

        var fragmentHtml = '  <tr class="active" >';
        fragmentHtml += '  <td><span>	 </span><input type="text" style="display:block;" class="  form-control clsHide" /></td>';
        fragmentHtml += '  <td ><span>	 </span><input type="text"  style="display:block;" class="  form-control clsHide" /></td > ';
        fragmentHtml += '  <td ><span>	 </span><input type="text"  style="display:block;" class="  form-control clsHide" /></td > ';
        fragmentHtml += '  <td ><span>  </span><input type="text"  style="display:block;" class="  form-control clsHide" /></td > ';
        fragmentHtml += '  <td name = "buttons" > ';
        fragmentHtml += '  <div class=" pull-right" > ';
        fragmentHtml += '  <a class="btn btn-primary text-white btnEdit clsShow"  style="display:none;" > <i data-feather="edit"></i></a > ';
        fragmentHtml += '   <a class="btn btn-danger text-white btnDelete clsShow"  style="display:none;" > <i data-feather="trash-2"></i></a > ';
        fragmentHtml += '  <a class="btn btn-success text-white btnSave clsHide"  style="display:inline-block;" > <i data-feather="save"></i></a > ';
        fragmentHtml += '  <a class="btn btn-warning text-white btnCancel clsHide"  style="display:inline-block;" > <i data-feather="x"></i></a > ';
        fragmentHtml += '    </div > ';
        fragmentHtml += '    </td >';
        fragmentHtml += '    </tr >';

        $("#tblEditable").append(fragmentHtml);
        feather.replace();
    });

});