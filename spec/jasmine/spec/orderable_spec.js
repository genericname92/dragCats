describe("orderable", function () {
  it("should be a jQuery plugin", function () {
    expect($.Orderable).toBeDefined();
  });

  it("should not use $.Sortable", function () {
    expect($.Sortable).not.toBeDefined();
  });

  it("should not move an element when immediately dropped", function () {
    var dragEl = $(".photo").eq(0);
    var offset = dragEl.offset();
    dragEl.simulate('click', {});
    expect(dragEl.offset()).toEqual(offset);
    expect($(".photo").attr("id")).toEqual("1");
  });

  it("should allow dragging horizontally", function () {
    var dragEl = $(".photo").eq(0);
    var dragElId = dragEl.attr("id");
    var nextElId = $(".photo").eq(1).attr("id");
    var oldOffset = dragEl.offset();
    dragEl.simulate('drag-n-drop', { dx: 400 });
    expect($(".photo").attr("id")).toEqual(nextElId);
    expect($(".photo").eq(2).attr("id")).toEqual(dragElId);
    expect(dragEl.offset().top).toEqual(oldOffset.top);
    expect(dragEl.offset().left).toBeLessThan(oldOffset.left + 450);
    expect(dragEl.offset().left).toBeGreaterThan(oldOffset.left + 350);
  });

  it("should allow dragging vertically", function () {
    var dragEl = $(".photo").eq(0);
    var dragElId = dragEl.attr("id");
    var nextElId = $(".photo").eq(1).attr("id");
    var oldOffset = dragEl.offset();
    dragEl.simulate('drag-n-drop', { dy: 200 });
    expect($(".photo").attr("id")).toEqual(nextElId);
    expect($(".photo").eq(6).attr("id")).toEqual(dragElId);
    expect(dragEl.offset().top).toBeLessThan(oldOffset.top + 250);
    expect(dragEl.offset().top).toBeGreaterThan(oldOffset.top + 150);
    expect(dragEl.offset().left).toEqual(oldOffset.left);
  });

  it("should allow dragging in both directions", function () {
    var dragEl = $('.photo').eq(0);
    var dragElId = dragEl.attr("id");
    var nextElId = $('.photo').eq(1).attr('id');
    var oldOffset = dragEl.offset();
    dragEl.simulate('drag-n-drop', {dx: 400, dy: 200});
    expect($('.photo').attr('id')).toEqual(nextElId);
    expect($('.photo').eq(8).attr('id')).toEqual(dragElId);
    expect(dragEl.offset().top).toBeLessThan(oldOffset.top + 250);
    expect(dragEl.offset().top).toBeGreaterThan(oldOffset.top + 150);
    expect(dragEl.offset().left).toBeLessThan(oldOffset.left + 450);
    expect(dragEl.offset().left).toBeGreaterThan(oldOffset.left + 350);
  });
});
