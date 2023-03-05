(function(c,n,i,a,p){"use strict";function r(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var h=r(c),M=r(p);let d=!1;async function u(){if(d)return setTimeout(u,125);d=!0;let t=n.NotificationSettingsStore.getState(),e=[];t.disabledSounds.includes("mute")||e.push("mute"),t.disabledSounds.includes("unmute")||e.push("unmute"),t.disabledSounds.push(...e),await n.MediaEngineActions.toggleSelfMute(),await M.default.sleep(100),await n.MediaEngineActions.toggleSelfMute(),t.disabledSounds=t.disabledSounds.filter(o=>!e.includes(o)),d=!1}var g={load(){let t=n.GatewayConnectionStore.getSocket(),e={_selfMute:!1,_selfDeaf:!1,_selfVideo:!1,get selfMute(){return a.persist.ghost.settings.autoMute?this._selfDeaf||this._selfMute:this._selfMute},set selfMute(s){this._selfMute=s},get selfDeaf(){return this._selfDeaf},set selfDeaf(s){this._selfDeaf=s},get selfVideo(){return this._selfVideo},set selfVideo(s){this._selfVideo=s}},o=["selfDeaf","selfMute","selfVideo"];a.subscriptions.push(h.default.before("voiceStateUpdate",t,s=>{for(let f=0;f<o.length;f++){const l=o[f];s[0][l]=e[l]||s[0][l]}return s})),a.subscriptions.push(i.contextMenus.patch("audio-device-context",(s,f)=>{let l=s?.props?.children?.props?.children;!Array.isArray(l)||(l.push(i.contextMenus.build.item({type:"separator"})),f.renderInputDevices?l.push(i.contextMenus.build.item({type:"toggle",label:a.i18n.format("FAKE_MUTE"),checked:e.selfMute,async action(){e.selfMute=!e.selfMute,u()}})):l.push(i.contextMenus.build.item({type:"toggle",label:a.i18n.format("FAKE_DEAF"),checked:e.selfDeaf,async action(){e.selfDeaf=!e.selfDeaf,u()}}),i.contextMenus.build.item({type:"toggle",label:a.i18n.format("FAKE_CAMERA"),checked:e.selfVideo,async action(){e.selfVideo=!e.selfVideo,u()}})))}))},unload(){u()}};return g})($acord.patcher,$acord.modules.common,$acord.ui,$acord.extension,$acord.utils);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGNoZXIgZnJvbSBcIkBhY29yZC9wYXRjaGVyXCI7XHJcbmltcG9ydCB7IEdhdGV3YXlDb25uZWN0aW9uU3RvcmUsIE1lZGlhRW5naW5lQWN0aW9ucywgTm90aWZpY2F0aW9uU2V0dGluZ3NTdG9yZSB9IGZyb20gXCJAYWNvcmQvbW9kdWxlcy9jb21tb25cIjtcclxuaW1wb3J0IHsgY29udGV4dE1lbnVzIH0gZnJvbSBcIkBhY29yZC91aVwiO1xyXG5pbXBvcnQgeyBwZXJzaXN0LCBzdWJzY3JpcHRpb25zIH0gZnJvbSBcIkBhY29yZC9leHRlbnNpb25cIjtcclxuaW1wb3J0IHsgaTE4biB9IGZyb20gXCJAYWNvcmQvZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiQGFjb3JkL3V0aWxzXCI7XHJcblxyXG5sZXQgdXBkYXRpbmcgPSBmYWxzZTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICBpZiAodXBkYXRpbmcpIHJldHVybiBzZXRUaW1lb3V0KHVwZGF0ZSwgMTI1KTtcclxuICB1cGRhdGluZyA9IHRydWU7XHJcbiAgbGV0IHN0YXRlID0gTm90aWZpY2F0aW9uU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gIGxldCB0b0Rpc2FibGUgPSBbXTtcclxuICBpZiAoIXN0YXRlLmRpc2FibGVkU291bmRzLmluY2x1ZGVzKFwibXV0ZVwiKSkgdG9EaXNhYmxlLnB1c2goXCJtdXRlXCIpO1xyXG4gIGlmICghc3RhdGUuZGlzYWJsZWRTb3VuZHMuaW5jbHVkZXMoXCJ1bm11dGVcIikpIHRvRGlzYWJsZS5wdXNoKFwidW5tdXRlXCIpO1xyXG5cclxuICBzdGF0ZS5kaXNhYmxlZFNvdW5kcy5wdXNoKC4uLnRvRGlzYWJsZSk7XHJcbiAgYXdhaXQgTWVkaWFFbmdpbmVBY3Rpb25zLnRvZ2dsZVNlbGZNdXRlKCk7XHJcbiAgYXdhaXQgdXRpbHMuc2xlZXAoMTAwKTtcclxuICBhd2FpdCBNZWRpYUVuZ2luZUFjdGlvbnMudG9nZ2xlU2VsZk11dGUoKTtcclxuICBzdGF0ZS5kaXNhYmxlZFNvdW5kcyA9IHN0YXRlLmRpc2FibGVkU291bmRzLmZpbHRlcihpID0+ICF0b0Rpc2FibGUuaW5jbHVkZXMoaSkpO1xyXG4gIHVwZGF0aW5nID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBsb2FkKCkge1xyXG4gICAgbGV0IHNvY2tldCA9IEdhdGV3YXlDb25uZWN0aW9uU3RvcmUuZ2V0U29ja2V0KCk7XHJcblxyXG4gICAgbGV0IGZha2VTdGF0ZXMgPSB7XHJcbiAgICAgIF9zZWxmTXV0ZTogZmFsc2UsXHJcbiAgICAgIF9zZWxmRGVhZjogZmFsc2UsXHJcbiAgICAgIF9zZWxmVmlkZW86IGZhbHNlLFxyXG4gICAgICBnZXQgc2VsZk11dGUoKSB7XHJcbiAgICAgICAgaWYgKCFwZXJzaXN0Lmdob3N0LnNldHRpbmdzLmF1dG9NdXRlKSByZXR1cm4gdGhpcy5fc2VsZk11dGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGZEZWFmIHx8IHRoaXMuX3NlbGZNdXRlO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQgc2VsZk11dGUodmFsKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZk11dGUgPSB2YWw7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldCBzZWxmRGVhZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZkRlYWY7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCBzZWxmRGVhZih2YWwpIHtcclxuICAgICAgICB0aGlzLl9zZWxmRGVhZiA9IHZhbDtcclxuICAgICAgfSxcclxuICAgICAgZ2V0IHNlbGZWaWRlbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZlZpZGVvO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQgc2VsZlZpZGVvKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGZWaWRlbyA9IHZhbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdGF0ZUtleXMgPSBbXCJzZWxmRGVhZlwiLCBcInNlbGZNdXRlXCIsIFwic2VsZlZpZGVvXCJdO1xyXG5cclxuICAgIHN1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgcGF0Y2hlci5iZWZvcmUoXHJcbiAgICAgICAgXCJ2b2ljZVN0YXRlVXBkYXRlXCIsXHJcbiAgICAgICAgc29ja2V0LFxyXG4gICAgICAgIChhcmdzKSA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZUtleSA9IHN0YXRlS2V5c1tpXTtcclxuICAgICAgICAgICAgYXJnc1swXVtzdGF0ZUtleV0gPSBmYWtlU3RhdGVzW3N0YXRlS2V5XSB8fCBhcmdzWzBdW3N0YXRlS2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcblxyXG4gICAgc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICBjb250ZXh0TWVudXMucGF0Y2goXHJcbiAgICAgICAgXCJhdWRpby1kZXZpY2UtY29udGV4dFwiLFxyXG4gICAgICAgIChjb21wLCBwcm9wcykgPT4ge1xyXG4gICAgICAgICAgbGV0IGFyciA9IGNvbXA/LnByb3BzPy5jaGlsZHJlbj8ucHJvcHM/LmNoaWxkcmVuO1xyXG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBhcnIucHVzaChcclxuICAgICAgICAgICAgY29udGV4dE1lbnVzLmJ1aWxkLml0ZW0oXHJcbiAgICAgICAgICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAocHJvcHMucmVuZGVySW5wdXREZXZpY2VzKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKFxyXG4gICAgICAgICAgICAgIGNvbnRleHRNZW51cy5idWlsZC5pdGVtKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRvZ2dsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogaTE4bi5mb3JtYXQoXCJGQUtFX01VVEVcIiksXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZha2VTdGF0ZXMuc2VsZk11dGUsXHJcbiAgICAgICAgICAgICAgICAgIGFzeW5jIGFjdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBmYWtlU3RhdGVzLnNlbGZNdXRlID0gIWZha2VTdGF0ZXMuc2VsZk11dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhcnIucHVzaChcclxuICAgICAgICAgICAgICBjb250ZXh0TWVudXMuYnVpbGQuaXRlbShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGkxOG4uZm9ybWF0KFwiRkFLRV9ERUFGXCIpLFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWtlU3RhdGVzLnNlbGZEZWFmLFxyXG4gICAgICAgICAgICAgICAgICBhc3luYyBhY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFrZVN0YXRlcy5zZWxmRGVhZiA9ICFmYWtlU3RhdGVzLnNlbGZEZWFmO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBjb250ZXh0TWVudXMuYnVpbGQuaXRlbShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIixcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGkxOG4uZm9ybWF0KFwiRkFLRV9DQU1FUkFcIiksXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZha2VTdGF0ZXMuc2VsZlZpZGVvLFxyXG4gICAgICAgICAgICAgICAgICBhc3luYyBhY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFrZVN0YXRlcy5zZWxmVmlkZW8gPSAhZmFrZVN0YXRlcy5zZWxmVmlkZW87XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgfSxcclxuICB1bmxvYWQoKSB7XHJcbiAgICB1cGRhdGUoKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiTm90aWZpY2F0aW9uU2V0dGluZ3NTdG9yZSIsIk1lZGlhRW5naW5lQWN0aW9ucyIsInV0aWxzIiwiR2F0ZXdheUNvbm5lY3Rpb25TdG9yZSIsInBlcnNpc3QiLCJzdWJzY3JpcHRpb25zIiwicGF0Y2hlciIsImNvbnRleHRNZW51cyIsImkxOG4iXSwibWFwcGluZ3MiOiJ1UkFNQSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDckIsZUFBZSxNQUFNLEdBQUc7QUFDeEIsRUFBRSxJQUFJLFFBQVE7QUFDZCxJQUFJLE9BQU8sVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNuQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDbEIsRUFBRSxJQUFJLEtBQUssR0FBR0EsZ0NBQXlCLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbkQsRUFBRSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDckIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQzVDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDOUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUMxQyxFQUFFLE1BQU1DLHlCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzVDLEVBQUUsTUFBTUMseUJBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsRUFBRSxNQUFNRCx5QkFBa0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM1QyxFQUFFLEtBQUssQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEYsRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ25CLENBQUM7QUFDRCxZQUFlO0FBQ2YsRUFBRSxJQUFJLEdBQUc7QUFDVCxJQUFJLElBQUksTUFBTSxHQUFHRSw2QkFBc0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNwRCxJQUFJLElBQUksVUFBVSxHQUFHO0FBQ3JCLE1BQU0sU0FBUyxFQUFFLEtBQUs7QUFDdEIsTUFBTSxTQUFTLEVBQUUsS0FBSztBQUN0QixNQUFNLFVBQVUsRUFBRSxLQUFLO0FBQ3ZCLE1BQU0sSUFBSSxRQUFRLEdBQUc7QUFDckIsUUFBUSxJQUFJLENBQUNDLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRO0FBQzVDLFVBQVUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ2hDLFFBQVEsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDaEQsT0FBTztBQUNQLE1BQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO0FBQ3hCLFFBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDN0IsT0FBTztBQUNQLE1BQU0sSUFBSSxRQUFRLEdBQUc7QUFDckIsUUFBUSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDOUIsT0FBTztBQUNQLE1BQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO0FBQ3hCLFFBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDN0IsT0FBTztBQUNQLE1BQU0sSUFBSSxTQUFTLEdBQUc7QUFDdEIsUUFBUSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDL0IsT0FBTztBQUNQLE1BQU0sSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3pCLFFBQVEsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDOUIsT0FBTztBQUNQLEtBQUssQ0FBQztBQUNOLElBQUksSUFBSSxTQUFTLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzFELElBQUlDLHVCQUFhLENBQUMsSUFBSTtBQUN0QixNQUFNQywyQkFBTyxDQUFDLE1BQU07QUFDcEIsUUFBUSxrQkFBa0I7QUFDMUIsUUFBUSxNQUFNO0FBQ2QsUUFBUSxDQUFDLElBQUksS0FBSztBQUNsQixVQUFVLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3JELFlBQVksTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLFlBQVksSUFBSSxDQUFDLENBQUMs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