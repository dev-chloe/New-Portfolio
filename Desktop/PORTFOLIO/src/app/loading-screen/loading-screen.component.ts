import { Component, OnInit, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { LoadingScreenService } from '../../services/loading-screen/loading-screen.service'
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit, AfterViewInit {

  debounceTime: number = 200;
  loading: boolean = false;
  loadingSubscription: Subscription;

  constructor(private loadingScreenService: LoadingScreenService,
              private elmRef:ElementRef,
              private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
    // this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(
    //   debounceTime(200)
    // ).subscribe((value) => {
    //   this.loading = value;
    // });
  }

  ngAfterViewInit(): void {
    this.elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
      (status: boolean) => {
        this.elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this.changeDetectorRef.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
