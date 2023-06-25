import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('displays the text "Made by Jim"', () => {
    const madeByJim = fixture.debugElement.query(By.css('p'))
    expect(madeByJim.nativeNode.innerText.trim()).toBe('Made by Jim. ☕️');
  });

  it('displays "Jim" as a link to his github page', () => {

    const link = fixture.debugElement.query(By.css('a'))

    expect(link.nativeNode.outerText).toEqual("Jim");
    expect(link.nativeNode.href).toEqual("https://twitter.com/JimLynchCodes");
  });

});
